import React, { useState, ChangeEvent, useRef, RefObject } from 'react';
import { TTag } from 'components/base/Tag/types';
import { STag } from 'components/base/Tag/style';

function Tag(props: TTag) {
  return <STag {...props} />;
}

export default Tag;
