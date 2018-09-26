Douban Api V2

- Basic URI : `https://api.douban.com/V2/`
- Online activities
  - Activities list : `/event/list?loc=108288&count=&start=`
  - Single activitie info : `/event/id`
- Movie
  - In theaters : `/movie/in_theaters?count=`
  - Coming soon : `/movie/coming_soon?count=`
  - Top 250 : `/movie/top250?count=`
  - Single movie info : `/movie/subject/id`
- Book
  - Search some books : `/book/search?q=&count=`
  - Single book info : `/book/id`
- Search
  - Search books : `/book/search?q=`
  - Search movie : `/movie/search?q=`
  - Search music : `/music/search?q=`

Mock Douban Backend

- User Basic URI : `https://douban.herokuapp.com/user/`

- Register
  - Path: `/user`
  - method: `POST`

- Login
  - Path: `/user/:id`
  - method: `GET`

- douban api

  moves: https://api.douban.com/v2/movie/in_theaters?count=2

  books: https://api.douban.com/v2/book/search?q=%E5%B9%B3%E5%87%A1%E7%9A%84%E4%B8%96%E7%95%8C