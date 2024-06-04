// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const ArticleCard = ({ title, description, category, imageSrc, readMoreLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full" />
      <div className="p-4">
        <div className="text-sm font-medium text-gray-600">{category}</div>
        <h2 className="text-lg font-bold text-gray-800 mt-2">{title}</h2>
        <p className="text-gray-500 mt-2">{description}</p>
        <a href={readMoreLink} className="text-blue-500 hover:underline mt-4">Read More</a>
      </div>
    </div>
  );
};

const TrendingArticles = () => {
  const articles = [
    {
      title: 'Make Your Next Journey Delhi To Paris in Comfirtable And Best Price',
      description: 'Think of a news blog that’s filled with content hourly on the Besides, random text risks to be unintendedly humorous or offensive day of going live.',
      category: 'Destination',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1716666258784-7f9a5b37c4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
      readMoreLink: '/destination/delhi-to-paris'
    },
    {
      title: 'Make Your Next Journey Delhi To Paris in Comfirtable And Best Price',
      description: 'Think of a news blog that’s filled with content hourly on the Besides, random text risks to be unintendedly humorous or offensive day of going live.',
      category: 'Journey',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1716666258784-7f9a5b37c4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
      readMoreLink: '/journey/delhi-to-paris'
    },
    {
      title: 'Make Your Next Journey Delhi To Paris in Comfirtable And Best Price',
      description: 'Think of a news blog that’s filled with content hourly on the Besides, random text risks to be unintendedly humorous or offensive day of going live.',
      category: 'Business',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1716666258784-7f9a5b37c4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
      readMoreLink: '/business/delhi-to-paris'
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Trending & Popular Articles</h2>
      <p className="text-gray-500 mb-10">Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default TrendingArticles;