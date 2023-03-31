import { setSeederFactory } from 'typeorm-extension';

import { Post } from 'src/post/entities/post.entity';

export default setSeederFactory(Post, (faker) => {
  const user = new Post();

  user.url = faker.internet.url();
  user.isActivated = faker.datatype.boolean();

  return user;
});
