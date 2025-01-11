import { Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => String)
export class AppRessolver {
  @Query((returns) => String)
  index(): string {
    return 'Nest js graph ql server';
  }
}
