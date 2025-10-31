import { useState } from 'preact/hooks';
import { Card, Heading, Paragraph, Space, Input, Select, Checkbox, Radio, Switch, Button } from '@/components';

export function FormsPage() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('monthly');
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <Space direction="vertical" size="large" className="w-100">
      <div>
        <Heading level={1}>Forms</Heading>
        <Paragraph variant="muted">
          Form components and inputs
        </Paragraph>
      </div>

      <Card title="Text Inputs" bordered>
        <Space direction="vertical" size="large" className="w-100">
          <Input
            placeholder="Enter your name"
            value={inputValue}
            onInput={(e) => setInputValue((e.target as HTMLInputElement).value)}
            fullWidth
          />
          <Input
            placeholder="Disabled input"
            disabled
            fullWidth
          />
          <Input
            placeholder="Email address"
            type="email"
            fullWidth
          />
        </Space>
      </Card>

      <Card title="Select Inputs" bordered>
        <Space direction="vertical" size="large" className="w-100">
          <Select
            value={selectValue}
            onChange={(e) => setSelectValue((e.target as HTMLSelectElement).value)}
            fullWidth
            options={[
              { value: '', label: 'Choose an option' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
          />
          <Select
            disabled
            fullWidth
            options={[
              { value: '', label: 'Disabled select' },
            ]}
          />
        </Space>
      </Card>

      <Card title="Checkboxes & Radio Buttons" bordered>
        <Space direction="vertical" size="large" className="w-100">
          <div>
            <Paragraph className="mb-2">Checkboxes:</Paragraph>
            <Space direction="vertical" size="small">
              <Checkbox
                label="I agree to terms and conditions"
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked((e.target as HTMLInputElement).checked)}
              />
              <Checkbox label="Subscribe to newsletter" />
              <Checkbox label="Disabled checkbox" disabled />
            </Space>
          </div>

          <div>
            <Paragraph className="mb-2">Radio Buttons (Billing Cycle):</Paragraph>
            <Space direction="vertical" size="small">
              <Radio
                label="Monthly"
                name="billing"
                value="monthly"
                checked={radioValue === 'monthly'}
                onChange={(e) => setRadioValue((e.target as HTMLInputElement).value)}
              />
              <Radio
                label="Yearly"
                name="billing"
                value="yearly"
                checked={radioValue === 'yearly'}
                onChange={(e) => setRadioValue((e.target as HTMLInputElement).value)}
              />
              <Radio
                label="Disabled"
                name="billing"
                value="disabled"
                disabled
              />
            </Space>
          </div>
        </Space>
      </Card>

      <Card title="Switches" bordered>
        <Space direction="vertical" size="large" className="w-100">
          <Switch
            label="Enable notifications"
            checked={switchChecked}
            onChange={(e) => setSwitchChecked((e.target as HTMLInputElement).checked)}
          />
          <Switch label="Dark mode" />
          <Switch label="Disabled switch" disabled />
        </Space>
      </Card>

      <Card title="Form Actions" bordered>
        <Space size="middle" wrap>
          <Button variant="primary" size="lg">Submit Form</Button>
          <Button variant="outline" size="lg">Reset</Button>
          <Button variant="ghost" size="lg">Cancel</Button>
        </Space>
      </Card>
    </Space>
  );
}
