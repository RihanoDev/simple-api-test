import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as BlogPost } from './post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll(): Promise<BlogPost[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<BlogPost> {
    return this.postService.findOne(id);
  }

  @Post()
  create(@Body() post: Partial<BlogPost>): Promise<BlogPost> {
    return this.postService.create(post);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.postService.remove(id);
  }
}
