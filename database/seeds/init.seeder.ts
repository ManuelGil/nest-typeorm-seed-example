import { DataSource } from 'typeorm';
import { runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension';

import postFactory from 'database/factories/post.factory';
import userFactory from 'database/factories/user.factory';
import PostSeeder from './post.seeder';
import UserSeeder from './user.seeder';

export default class InitSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [UserSeeder, PostSeeder],
      factories: [userFactory, postFactory],
    });
  }
}
