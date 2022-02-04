/**
 * file contains reexports of default and wrapped antd components
 *
 * this file is used in tsconfig.json as path to antd module
 * but webpack don't use this file
 *
 * raw context of this file is used in webpack/AntAliases.ts
 * to make webpack aliases object from overwritten components exports
 */
export { default as Affix } from 'antd/lib/affix';
export { default as Anchor } from 'antd/lib/anchor';
export { default as AutoComplete } from 'antd/lib/auto-complete';
export { default as Alert } from 'antd/lib/alert';
export { default as Avatar } from 'antd/lib/avatar';
export { default as BackTop } from 'antd/lib/back-top';
export { default as Badge } from 'antd/lib/badge';
export { default as Calendar } from 'antd/lib/calendar';
export { default as Card } from 'antd/lib/card';
export { default as Collapse } from 'antd/lib/collapse';
export { default as Carousel } from 'antd/lib/carousel';
export { default as Cascader } from 'antd/lib/cascader';
export { default as Checkbox } from 'antd/lib/checkbox';
export { default as Comment } from 'antd/lib/comment';
export { default as ConfigProvider } from 'antd/lib/config-provider';
export { default as DatePicker } from 'antd/lib/date-picker';
export { default as Descriptions } from 'antd/lib/descriptions';
export { default as Divider } from 'antd/lib/divider';
export { default as Drawer } from 'antd/lib/drawer';
export { default as Form } from 'antd/lib/form';
export { default as Icon } from 'antd/lib/icon';
export { default as InputNumber } from 'antd/lib/input-number';
export { default as Layout } from 'antd/lib/layout';
export { default as LocaleProvider } from 'antd/lib/locale-provider';
export { default as message } from 'antd/lib/message';
export { default as Mentions } from 'antd/lib/mentions';
export { default as Statistic } from 'antd/lib/statistic';
export { default as notification } from 'antd/lib/notification';
export { default as PageHeader } from 'antd/lib/page-header';
export { default as Pagination } from 'antd/lib/pagination';
export { default as Popconfirm } from 'antd/lib/popconfirm';
export { default as Popover } from 'antd/lib/popover';
export { default as Progress } from 'antd/lib/progress';
export { default as Radio } from 'antd/lib/radio';
export { default as Rate } from 'antd/lib/rate';
export { default as Result } from 'antd/lib/result';
export { default as Skeleton } from 'antd/lib/skeleton';
export { default as Slider } from 'antd/lib/slider';
export { default as Spin } from 'antd/lib/spin';
export { default as Switch } from 'antd/lib/switch';
export { default as Transfer } from 'antd/lib/transfer';
export { default as Tree } from 'antd/lib/tree';
export { default as Tabs } from 'antd/lib/tabs';
export { default as TimePicker } from 'antd/lib/time-picker';
export { default as Timeline } from 'antd/lib/timeline';
export { default as Tooltip } from 'antd/lib/tooltip';
export { default as Dropdown } from 'antd/lib/dropdown';
export { default as Modal } from 'antd/lib/modal';
export { default as Select } from 'antd/es/select';
export { default as TreeSelect } from 'antd/lib/tree-select';
export { default as Table } from 'antd/lib/table';
export { default as Steps } from 'antd/lib/steps';
export { default as Tag } from 'antd/lib/tag';
export { default as Menu } from 'antd/lib/menu';
export { default as List } from 'antd/lib/list';
export { default as Empty } from 'antd/lib/empty';
export { default as Breadcrumb } from 'antd/lib/breadcrumb';
export { default as Row } from 'antd/lib/row';
export { default as Upload } from 'antd/lib/upload';
export { default as version } from 'antd/lib/version';

// overwritten
export { default as Button, ButtonProps } from 'antd/es/button';
export { default as Space } from 'antd/es/space';
export { default as Input, InputProps } from 'antd/es/input';
export { default as Col } from 'src/components/antd/Col/Col';
export { default as Typography, TypographyProps } from 'antd/es/typography';
