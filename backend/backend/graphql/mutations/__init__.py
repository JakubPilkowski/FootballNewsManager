from .authentication import AuthMutation
import graphene

class Mutation(AuthMutation, graphene.ObjectType):
    pass