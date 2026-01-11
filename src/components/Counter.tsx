import { Card, Space, Statistic, Row, Col, Button, Typography } from "antd";
import { PlusOutlined, MinusOutlined, ReloadOutlined } from '@ant-design/icons';
import { useState, type FC } from "react";

const { Title } = Typography;

export const Counter: FC = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = (val: number): void => {
      setCount((prev) => prev + val)
    }
  
    const handleDecrement = (val: number): void => {
      setCount((prev) => prev - val)
    }
  
    const handleReset = (): void => {
      setCount(0)
    }
  
    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}>
            <Card
              style={{ 
                width: 400, 
                textAlign: 'center',
                borderRadius: 16,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Title level={2} style={{ marginBottom: 0 }}>
                  Счётчик
                </Title>
                
                <Statistic
                  value={count}
                  valueStyle={{ 
                    fontSize: 64, 
                    fontWeight: 'bold',
                    color: count > 0 ? '#52c41a' : count < 0 ? '#f5222d' : '#1890ff'
                  }}
                />
      
                <Row gutter={16}>
                  <Col span={8}>
                    <Button
                      type="primary"
                      danger
                      size="large"
                      icon={<MinusOutlined />}
                      onClick={() => handleDecrement(1)}
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
                      onClick={() => handleIncrement(1)}
                      block
                    >
                      Плюс
                    </Button>
                  </Col>
                </Row>
      
              </Space>
            </Card>
          </div>
    )
}