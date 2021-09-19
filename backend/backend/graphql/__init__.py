
import graphene

from backend.graphql.queries import Query
from backend.graphql.mutations import Mutation

schema = graphene.Schema(query=Query, mutation=Mutation)