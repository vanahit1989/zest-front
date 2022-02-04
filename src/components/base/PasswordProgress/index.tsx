import React, { useState, ChangeEvent, useRef, RefObject } from 'react';
import { Password } from 'src/components/base/Input';
import { Col, Progress, Row, Space } from 'antd';
import {
  CheckOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  StopOutlined,
} from '@ant-design/icons';
import { Colors } from 'src/core/CssVariables';
import {
  TPassedValidations,
  TPasswordProgress,
  TValidationRules,
  TValidationTags,
} from 'src/components/base/PasswordProgress/types';
import useResize from 'src/hooks/onResize';
import { regexPatterns } from 'src/components/form/validationRules';
import Tag from 'src/components/base/Tag';

const validationRules: TValidationRules = {
  [TValidationTags.LOWERCASE]: regexPatterns.oneLowerCase,
  [TValidationTags.UPPERCASE]: regexPatterns.oneUpperCase,
  [TValidationTags.NUMBER]: regexPatterns.oneNumber,
  [TValidationTags.SYMBOL]: regexPatterns.oneSymbol,
  [TValidationTags.LETTERS8]: regexPatterns.letters8,
};

function PasswordProgress(props: TPasswordProgress) {
  const [value, setValue] = useState('');
  const [divWidth, setDivWidth] = useState(0);
  const [passedValidations, setPassedValidations] =
    useState<TPassedValidations>();

  const count = Object.keys(passedValidations || {}).length;
  const progressPercent = (100 / Object.keys(validationRules).length) * count;
  const passwordRef = useRef<HTMLDivElement>(null);

  const onResize = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      setDivWidth(ref.current.clientWidth);
    }
  };
  useResize<HTMLDivElement>(passwordRef, onResize);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    validateRules(value);
    setValue(value);
  };

  const validateRules = (value: string) => {
    setPassedValidations({});
    const passedValidations: TPassedValidations = {};
    Object.keys(validationRules).forEach(item => {
      console.log(item);
      if (validationRules[item as TValidationTags].test(value)) {
        passedValidations[item as TValidationTags] = true;
      }
    });
    setPassedValidations(passedValidations);
  };

  const getProgressStatus = () => {
    if (count < 4) {
      return Colors.ErrorColor;
    }
    if (count < 5) {
      return Colors.WarningColor;
    }
    return Colors.SuccessColor;
  };

  const getTagIcon = (validation: TValidationTags) => {
    console.log(passedValidations, 'passed validations');
    return passedValidations && passedValidations[validation] ? (
      <CheckOutlined color={Colors.SuccessColor} />
    ) : (
      <StopOutlined />
    );
  };
  return (
    <div ref={passwordRef}>
      <Password
        data-testid="button"
        placeholder="Input"
        value={value}
        onChange={onChange}
        iconRender={(visible: boolean) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />

      <Progress
        percent={progressPercent}
        strokeColor={getProgressStatus()}
        showInfo={false}
        steps={Math.floor(divWidth / 16)}
        strokeWidth={2}
      />
      <Row justify="space-between">
        <Col>
          <Tag outline>8 characters containing</Tag>
        </Col>
        <Col>
          {Object.values(TValidationTags)
            .filter(item => item !== TValidationTags.LETTERS8)
            .map(item => {
              return (
                <Tag icon={getTagIcon(item as TValidationTags)} outline>
                  {item}
                </Tag>
              );
            })}
        </Col>
      </Row>
    </div>
  );
}

export default PasswordProgress;
