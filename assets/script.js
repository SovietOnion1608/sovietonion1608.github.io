function searchPosts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {
    const title = post.dataset.title.toLowerCase();
    const tags = post.dataset.tags.toLowerCase();
    if (title.includes(searchTerm) || tags.includes(searchTerm)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}
