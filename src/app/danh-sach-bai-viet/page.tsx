'use client';

import React, { useState, useEffect } from 'react';
import { Card, List, Typography, Button, message, Space, Tag, Image, Modal } from 'antd';
import {
  FileTextOutlined,
  PictureOutlined,
  DownloadOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Title, Text, Paragraph } = Typography;

interface Article {
  id: number;
  title: string;
  thumbnail: string;
  document: string;
  createdAt: string;
  updatedAt: string;
}

const DanhSachBaiVietPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/articles');
      const result = await response.json();

      if (response.ok) {
        setArticles(result.articles);
      } else {
        message.error('Không thể tải danh sách bài viết');
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
      message.error('Có lỗi xảy ra khi tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: 'Bạn có chắc chắn muốn xóa bài viết này?',
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk: async () => {
        try {
          const response = await fetch(`/api/articles/${id}`, {
            method: 'DELETE',
          });

          if (response.ok) {
            message.success('Đã xóa bài viết thành công');
            fetchArticles(); // Refresh list
          } else {
            message.error('Không thể xóa bài viết');
          }
        } catch (error) {
          message.error('Có lỗi xảy ra khi xóa bài viết');
        }
      },
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleImagePreview = (imagePath: string) => {
    setPreviewImage(imagePath);
    setPreviewVisible(true);
  };

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center'>
        <Card className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <Text>Đang tải dữ liệu...</Text>
        </Card>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
          <div className='flex justify-between items-center'>
            <div>
              <Title level={2} className='text-blue-600 mb-1'>
                Danh sách bài viết
              </Title>
              <Text type='secondary'>Quản lý và xem tất cả bài viết đã tạo</Text>
            </div>
            <Space>
              <Link href='/tao-bai-viet'>
                <Button type='primary' className='bg-blue-600 hover:bg-blue-700 border-blue-600'>
                  Tạo bài viết mới
                </Button>
              </Link>
            </Space>
          </div>
        </div>

        {/* Articles List */}
        {articles.length === 0 ? (
          <Card className='text-center py-12'>
            <PictureOutlined className='text-6xl text-gray-300 mb-4' />
            <Title level={3} className='text-gray-500 mb-2'>
              Chưa có bài viết nào
            </Title>
            <Text type='secondary' className='text-base'>
              Hãy tạo bài viết đầu tiên để bắt đầu
            </Text>
            <div className='mt-6'>
              <Link href='/tao-bai-viet'>
                <Button
                  type='primary'
                  size='large'
                  className='bg-blue-600 hover:bg-blue-700 border-blue-600'
                >
                  Tạo bài viết đầu tiên
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 3,
              xxl: 3,
            }}
            dataSource={articles}
            renderItem={(article) => (
              <List.Item>
                <Card
                  hoverable
                  className='h-full'
                  cover={
                    <div className='relative h-48 overflow-hidden'>
                      <Image
                        alt={article.title}
                        src={`/${article.thumbnail}`}
                        className='w-full h-full object-cover cursor-pointer'
                        onClick={() => handleImagePreview(`/${article.thumbnail}`)}
                        preview={false}
                      />
                      <div className='absolute top-2 right-2'>
                        <Tag color='blue' className='font-medium'>
                          #{article.id}
                        </Tag>
                      </div>
                    </div>
                  }
                  actions={[
                    <Button
                      key='view'
                      type='text'
                      icon={<EyeOutlined />}
                      onClick={() => handleImagePreview(`/${article.thumbnail}`)}
                      className='text-blue-500 hover:text-blue-600'
                    >
                      Xem ảnh
                    </Button>,
                    <Button
                      key='download'
                      type='text'
                      icon={<DownloadOutlined />}
                      href={`/${article.document}`}
                      download
                      className='text-green-500 hover:text-green-600'
                    >
                      Tải DOCX
                    </Button>,
                    <Button
                      key='delete'
                      type='text'
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(article.id)}
                      className='text-red-500 hover:text-red-600'
                    >
                      Xóa
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={
                      <Paragraph ellipsis={{ rows: 2 }} className='text-base font-medium mb-2'>
                        {article.title}
                      </Paragraph>
                    }
                    description={
                      <div className='space-y-2'>
                        <div className='flex items-center text-xs text-gray-500'>
                          <FileTextOutlined className='mr-1' />
                          Tạo lúc: {formatDate(article.createdAt)}
                        </div>
                        <div className='flex items-center text-xs text-gray-500'>
                          <PictureOutlined className='mr-1' />
                          Cập nhật: {formatDate(article.updatedAt)}
                        </div>
                      </div>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        )}

        {/* Image Preview Modal */}
        <Modal
          open={previewVisible}
          footer={null}
          onCancel={() => setPreviewVisible(false)}
          width='80%'
          centered
        >
          <Image alt='Preview' style={{ width: '100%' }} src={previewImage} preview={false} />
        </Modal>
      </div>
    </div>
  );
};

export default DanhSachBaiVietPage;
