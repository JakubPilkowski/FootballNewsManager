verify_account_mutation = """mutation VerifyAccount($token: String!) {
                            verifyAccount(token: $token){
                              success
                              errors
                            }
                          }"""
