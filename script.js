document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const loadMoreButton = document.getElementById('load-more');
    let currentPage = 1;
    const postsPerPage = 3; // Количество постов на странице

    function loadBlogPosts(page) {
        // Замените это реальным запросом к серверу или API, если у вас есть база данных
        // В данном примере мы будем использовать фиктивные данные
        const fakePosts = [
            { title: '', excerpt: '', link: 'blog-post.html' },
            { title: '', excerpt: '', link: 'blog-post.html' },
            { title: '', excerpt: '', link: 'blog-post.html' },
            { title: '', excerpt: '', link: 'blog-post.html' },
            { title: '', excerpt: '', link: 'blog-post.html' },
            { title: '', excerpt: '', link: 'blog-post.html' },
            { title: '', excerpt: '', link: 'blog-post.html' },
            { title: '', excerpt: '', link: 'blog-post.html' },
            { title: '', excerpt: '', link: 'blog-post.html' },
            { title: '', excerpt: '', link: 'blog-post.html' },
        ];

        const startIndex = (page - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const postsToDisplay = fakePosts.slice(startIndex, endIndex);

        postsToDisplay.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('blog-post');
            postDiv.innerHTML = `
                <h3><a href="${post.link}">${post.title}</a></h3>
                <p>${post.excerpt}</p>
            `;
            blogPostsContainer.appendChild(postDiv);
        });

        // Скрыть кнопку, если больше нет постов
        if (endIndex >= fakePosts.length) {
            loadMoreButton.style.display = 'none';
        } else {
            loadMoreButton.style.display = 'block';
        }
    }

    loadMoreButton.addEventListener('click', function() {
        currentPage++;
        loadBlogPosts(currentPage);
    });

    // Загрузить первую страницу постов при загрузке страницы
    loadBlogPosts(currentPage);
});
