import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  return <div>This is post: {params.id}</div>;
}
