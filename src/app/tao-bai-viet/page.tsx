'use client';

import React, { useState } from 'react';
import { Button, Input, Upload, message, Form, Card, Typography, Divider } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  LockOutlined,
  FileTextOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';

const { Title, Text } = Typography;

interface LoginForm {
  username: string;
  password: string;
}

interface ArticleForm {
  title: string;
  thumbnail: {
    file: UploadFile;
    fileList: UploadFile[];
  };
  content: {
    file: UploadFile;
    fileList: UploadFile[];
  };
}

const TaoBaiVietPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm] = Form.useForm<LoginForm>();
  const [articleForm] = Form.useForm<ArticleForm>();
  const [loading, setLoading] = useState(false);

  const onLogin = async (values: LoginForm) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (values.username === 'admin' && values.password === '123@123Aa') {
        setIsLoggedIn(true);
        message.success('Đăng nhập thành công!');
        loginForm.resetFields();
      } else {
        message.error('Tên đăng nhập hoặc mật khẩu không đúng!');
      }
      setLoading(false);
    }, 1000);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    articleForm.resetFields();
    message.info('Đã đăng xuất');
  };

  const onArticleSubmit = async (values: ArticleForm) => {
    if (!values.thumbnail?.fileList?.[0] || !values.content?.fileList?.[0]) {
      message.error('Vui lòng chọn đầy đủ ảnh thumbnail và file HTML!');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('thumbnail', values.thumbnail.fileList[0].originFileObj as File);
      formData.append('content', values.content.fileList[0].originFileObj as File);

      const response = await fetch('/api/articles', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        message.success(result.message || 'Bài viết đã được tạo thành công!');
        articleForm.resetFields();
      } else {
        message.error(result.error || 'Có lỗi xảy ra khi tạo bài viết!');
      }
    } catch (error) {
      message.error('Có lỗi xảy ra khi gửi bài viết!');
    } finally {
      setLoading(false);
    }
  };

  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith('image/');
      const isHtml = file.type === 'text/html';

      if (!isImage && !isHtml) {
        message.error('Chỉ hỗ trợ file ảnh hoặc HTML!');
        return false;
      }

      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        message.error('File phải nhỏ hơn 5MB!');
        return false;
      }

      return false; // Prevent auto upload
    },
    onChange: (info) => {
      if (info.file.status === 'removed') {
        message.info('File đã được xóa');
      }
    },
  };

  if (!isLoggedIn) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
        <Card className='w-full max-w-md shadow-lg'>
          <div className='text-center mb-6'>
            <Title level={2} className='text-blue-600 mb-2'>
              Đăng nhập
            </Title>
            <Text type='secondary'>Vui lòng đăng nhập để tiếp tục</Text>
          </div>

          <Form form={loginForm} name='login' onFinish={onLogin} layout='vertical' size='large'>
            <Form.Item
              name='username'
              label='Tên đăng nhập'
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
            >
              <Input
                prefix={<UserOutlined className='text-gray-400' />}
                placeholder='Nhập tên đăng nhập'
              />
            </Form.Item>

            <Form.Item
              name='password'
              label='Mật khẩu'
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className='text-gray-400' />}
                placeholder='Nhập mật khẩu'
              />
            </Form.Item>

            <Form.Item className='mb-0'>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                className='w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700'
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>

          <div className='mt-4 text-center'>
            <Text type='secondary' className='text-xs'>
              Tài khoản demo: admin / 123@123Aa
            </Text>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
          <div className='flex justify-between items-center'>
            <div>
              <Title level={2} className='text-blue-600 mb-1'>
                Tạo bài viết mới
              </Title>
              <Text type='secondary'>Quản lý nội dung và tài liệu cho website</Text>
            </div>
            <Button
              onClick={onLogout}
              className='border-red-500 text-red-500 hover:bg-red-50 hover:border-red-600 hover:text-red-600'
            >
              Đăng xuất
            </Button>
          </div>
        </div>

        {/* Article Form */}
        <Card className='shadow-lg'>
          <Form
            form={articleForm}
            name='article'
            onFinish={onArticleSubmit}
            layout='vertical'
            size='large'
          >
            <Form.Item
              name='title'
              label={
                <span className='text-base font-medium'>
                  <FileTextOutlined className='mr-2 text-blue-500' />
                  Tiêu đề bài viết
                </span>
              }
              rules={[
                { required: true, message: 'Vui lòng nhập tiêu đề bài viết!' },
                { min: 10, message: 'Tiêu đề phải có ít nhất 10 ký tự!' },
              ]}
            >
              <Input placeholder='Nhập tiêu đề bài viết...' className='text-base' />
            </Form.Item>

            <Form.Item
              name='thumbnail'
              label={
                <span className='text-base font-medium'>
                  <PictureOutlined className='mr-2 text-blue-500' />
                  Ảnh thumbnail
                </span>
              }
              rules={[{ required: true, message: 'Vui lòng chọn ảnh thumbnail!' }]}
            >
              <Upload
                {...uploadProps}
                listType='picture-card'
                maxCount={1}
                accept='image/*'
                className='w-full'
              >
                <div className='flex flex-col items-center justify-center'>
                  <UploadOutlined className='text-2xl text-blue-500 mb-2' />
                  <div className='text-blue-500'>Chọn ảnh</div>
                  <div className='text-xs text-gray-400 mt-1'>JPG, PNG, GIF (tối đa 5MB)</div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item
              name='content'
              label={
                <span className='text-base font-medium'>
                  <FileTextOutlined className='mr-2 text-blue-500' />
                  Nội dung HTML
                </span>
              }
              rules={[{ required: true, message: 'Vui lòng chọn file HTML!' }]}
            >
              <Upload {...uploadProps} maxCount={1} accept='.html,.htm' className='w-full'>
                <Button
                  icon={<UploadOutlined />}
                  className='h-16 w-full border-dashed border-2 border-blue-300 hover:border-blue-500 text-blue-500 hover:text-blue-600'
                >
                  <div className='flex flex-col items-center'>
                    <div className='text-base'>Chọn file HTML</div>
                    <div className='text-xs text-gray-400 mt-1'>Dung lượng tối đa 5MB</div>
                  </div>
                </Button>
              </Upload>
            </Form.Item>

            <Divider />

            <Form.Item className='mb-0'>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                className='w-full h-12 text-base font-medium bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700'
              >
                {loading ? 'Đang xử lý...' : 'Tạo bài viết'}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default TaoBaiVietPage;
