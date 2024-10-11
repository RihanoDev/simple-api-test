import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  create(post: Partial<Post>): Promise<Post> {
    return this.postRepository.save(post);
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
