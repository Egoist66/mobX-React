import {
  Card,
  Space,
  Statistic,
  Row,
  Col,
  Button,
  Typography,
  Flex,
} from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  ReloadOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useState, type FC } from "react";
import {counterStore } from "../store/counter.store";
import {observer} from 'mobx-react-lite'

const { Title, Paragraph } = Typography;

export const Counter: FC = observer(() => {
  

  const [savedCount, setSavedCount] = useState<number | null>(null)
   const {count, total, increment, decrement} = counterStore

  const handleReset = (): void => {
    
    localStorage.removeItem("count");
  };

  const handleSave = (): void => {
    setSavedCount(count)
    localStorage.setItem("count", count.toString());
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Card
        style={{
          width: 400,
          textAlign: "center",
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Space orientation="vertical" size="large" style={{ width: "100%" }}>
          <Title level={2} style={{ marginBottom: 0 }}>
            Счётчик
          </Title>

          <Statistic
            value={count}
            styles={{
              content: {
                fontSize: 64,
                fontWeight: "bold",
                color:
                  count > 0 ? "#52c41a" : count < 0 ? "#f5222d" : "#1890ff",
              },
            }}
          />

          <Row gutter={16}>
            <Col span={8}>
              <Button
                type="primary"
                danger
                size="large"
                icon={<MinusOutlined />}
                onClick={() => decrement(1)}
                block
              >
                Минус
              </Button>
            </Col>
            <Col span={8}>
              <Button
                size="large"
                icon={<ReloadOutlined />}
                onClick={handleReset}
                block
              >
                Сброс
              </Button>
            </Col>
            <Col span={8}>
              <Button
                type="primary"
                size="large"
                icon={<PlusOutlined />}
                onClick={() => increment(1)}
                block
              >
                Плюс
              </Button>
            </Col>
          </Row>

          <Flex>
            <Button
              type="dashed"
              size="large"
              icon={<SaveOutlined />}
              onClick={handleSave}
              block
            >
              Сохранить состояние
            </Button>
          </Flex>
         {savedCount !== 0 && <Paragraph>Сохраненное число: {savedCount}</Paragraph>}
        </Space>
        <Paragraph type="warning">
            Вычисленное: {total}
        </Paragraph>
      </Card>
    </div>
  );
});
