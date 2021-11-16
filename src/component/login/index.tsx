import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Bg_login2 from "../../assets/images/bg_login2.jpg";

type LoginValue = {
  username: string;
  password: string;
  remember: boolean;
};
const Login = () => {
  const navigator = useNavigate();
  const onFinish = (values: LoginValue) => {
    console.log("Received values of form: ", values);
    const { username, password } = values;
    if (username === "mengping" && password === "19960619") {
      navigator("/home");
    }
  };
  return (
    <Body>
      <LoginContainer>
        <Title>欢迎登录小可爱的网站</Title>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="middle"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </LoginContainer>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  justify-content: center;
`;
const LoginContainer = styled.div`
  border-radius: 0.5rem;
  margin-top: 10rem;
  padding: 1rem;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 30rem;
    height: 20rem;
    background: url(${Bg_login2}) no-repeat;
    background-size: cover;
  }
  @media (min-width: 600px) and (max-width: 1200px) {
    background: green;
    width: 30rem;
  }
  @media (min-width: 1200px) {
    background: skyblue;
    width: 35rem;
  }
`;
const Title = styled.h1`
  text-align: center;
  color: skyblue;
`;

export default React.memo(Login);
