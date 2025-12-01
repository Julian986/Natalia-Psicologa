import React from 'react';

const LatestPosts: React.FC = () => {
  const posts = [
    {
      title: 'Buscar ayuda es signo de fortaleza',
      excerpt:
        'El tratamiento individual a menudo se denomina psicoterapia, y está destinado a ayudar a las personas con sus problemas emocionales, que pueden …',
      category: 'Adolescentes',
      link: '#post-1',
    },
    {
      title: 'Aprovecha al máximo tu día de trabajo',
      excerpt:
        'Hay muchos problemas emocionales que encuentran un rincón en nuestro corazón y se niegan a desaparecer. Con el tiempo, estos problemas pueden transformarse …',
      category: 'Superación Personal',
      link: '#post-2',
    },
    {
      title: 'Ayuda a tu hijo a encontrar nuevos amigos',
      excerpt:
        'La ansiedad es algo que existe en la vida de todos en cierta medida, y de alguna manera se sabe que es médicamente útil …',
      category: 'Terapia Infantil',
      link: '#post-3',
    },
  ];

  return (
    <div className="mb-10 mt-20 pt-16 border-t-2 border-gray-200">
      {/* Title */}
      <h3 className="widget-title mb-6">Lecturas Recomendadas</h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <article key={index} className="latest-post">
            {/* Thumbnail */}
            <a href={post.link} className="latest-post__thumbnail relative block">
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center overflow-hidden group">
                <div className="w-full h-full bg-[#1FA7DA]/10 flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Imagen</span>
                </div>
              </div>
              
              {/* Categories */}
              <div className="absolute top-3 left-3">
                <ul className="post-categories">
                  <li>
                    <a 
                      href={`#category-${post.category.toLowerCase()}`} 
                      className="bg-[#1FA7DA] hover:bg-[#178bb8] shadow-lg"
                      style={{ 
                        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                        fontWeight: '700'
                      }}
                    >
                      {post.category}
                    </a>
                  </li>
                </ul>
              </div>
            </a>

            {/* Title */}
            <h4 className="latest-post__title">
              <a href={post.link} className="hover:text-[#1FA7DA]">{post.title}</a>
            </h4>

            {/* Excerpt */}
            <p className="latest-post__excerpt">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;

