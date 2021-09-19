import graphene

from .sample import SampleQuery
from graphql_auth.schema import UserQuery, MeQuery

class Query(UserQuery, MeQuery, SampleQuery, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass