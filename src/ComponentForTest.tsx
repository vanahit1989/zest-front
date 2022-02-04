import React from 'react';
import styled from 'styled-components';
import { TButtonTypes } from 'components/base/Button/types';
import { TInputTypes } from 'components/base/Input/types';
import { Col, Row } from 'antd';
import Button from 'components/base/Button';
import { Text, Title } from 'components/base/Typography';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Password } from 'components/base/Input';
import PasswordProgress from 'components/base/PasswordProgress';
import { CustomSelect } from 'components/base/Select';

export function ComponentForTest() {
  return (
    <Row justify="center" gutter={[16, 32]} color="secondary">
      <h2>BUTTONS</h2>
      <Row data-testid="container" gutter={[16, 32]} justify="center">
        <Col span={5}>
          <Button data-testid="button" type="default">
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button data-testid="button" type="default" outline>
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button data-testid="button" type="default" disabled>
            {' '}
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          {' '}
          <Button data-testid="button" type="default" outline disabled>
            Customized button
          </Button>{' '}
        </Col>

        <Col span={5}>
          <Button data-testid="button" type="primary">
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button data-testid="button" type="primary" outline>
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button data-testid="button" type="primary" disabled>
            {' '}
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          {' '}
          <Button data-testid="button" type="primary" outline disabled>
            Customized button
          </Button>{' '}
        </Col>
        <Col span={5}>
          <Button data-testid="button" type="primary" color={TButtonTypes.Info}>
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Info}
            outline
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Info}
            disabled
          >
            {' '}
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          {' '}
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Info}
            outline
            disabled
          >
            Customized button
          </Button>{' '}
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Warning}
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Warning}
            outline
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Warning}
            disabled
          >
            {' '}
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Warning}
            disabled
            outline
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Success}
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Success}
            outline
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Success}
            disabled
          >
            {' '}
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Success}
            disabled
            outline
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Danger}
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Danger}
            outline
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Danger}
            disabled
          >
            {' '}
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button
            data-testid="button"
            type="primary"
            color={TButtonTypes.Danger}
            outline
            disabled
          >
            Customized button
          </Button>
        </Col>
        <Col span={5}>
          <Button data-testid="button" type="default">
            Customized button
          </Button>
        </Col>
      </Row>
      <h2>INPUTS</h2>
      <Row data-testid="container" gutter={[16, 32]} justify="center">
        <Col span={5}>
          <Input data-testid="button" placeholder="Input" />
        </Col>
        <Col span={5}>
          <Password
            data-testid="button"
            placeholder="Input"
            iconRender={(visible: boolean) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Col>
        <Col span={12}>
          <PasswordProgress />
        </Col>
        <Col span={5}>
          <Input
            data-testid="button"
            placeholder="Input"
            color={TInputTypes.Danger}
          />
        </Col>
        <Col span={5}>
          <Input
            data-testid="button"
            placeholder="Input"
            color={TInputTypes.Danger}
            disabled
          />
        </Col>
        <Col span={5}>
          <Input
            data-testid="button"
            placeholder="Input"
            color={TInputTypes.Warning}
          />
        </Col>
        <Col span={5}>
          <Input
            data-testid="button"
            placeholder="Input"
            color={TInputTypes.Warning}
            disabled
          />
        </Col>
        <Col span={5}>
          <Title data-testid="button" type="danger" level={1}>
            {' '}
            Title 1{' '}
          </Title>
          <Text data-testid="button" type="secondary" level={5}>
            {' '}
            Title 1{' '}
          </Text>
        </Col>
        <CustomSelect />
      </Row>

      {/*     <List */}
      {/*  data-testid="list" */}
      {/*  grid={{ column: 2 }} */}
      {/*  dataSource={["Item 1", "Item 2"]} */}
      {/*  renderItem={(item) => <List.Item>{item}</List.Item>} */}
      {/* /> */}
      {/* <ButtonButton loading>Loading</ButtonButton> */}
    </Row>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin-bottom: 20px;
  }
`;
