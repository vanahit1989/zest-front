import React, { useState, ChangeEvent, useRef, RefObject } from 'react';
import { TTag } from 'src/components/base/Tag/types';
import { STag } from 'src/components/base/Tag/style';

function Tag(props: TTag) {
  return <STag {...props} />;
}

export default Tag;
