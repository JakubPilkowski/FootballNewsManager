from django.shortcuts import render
from django.views.generic import TemplateView  # Import TemplateView
from fnm import mutations
import json
import httpx


async def VerifyAccountView(request):
    context = {}
    token = request.GET.get("token", "")
    email = request.GET.get("email", "")

    context["loading"] = True

    if not token or not email:
        context["status"] = False
        context["loading"] = False
        return render(request, "verify.html", context)
    try:
        async with httpx.AsyncClient() as client:
            host = request.get_host()
            headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
            payload = {
                "query": mutations.verify_account_mutation,
                "variables": {"token": token},
            }
            request_url = f"http://{host}/graphql"
            response = await client.post(
                request_url, data=json.dumps(payload), headers=headers
            )
            status = response.json()["data"]["verifyAccount"]["success"]
            context["loading"] = False
            if status:
                context["status"] = True
                context["link_href"] = "exp://192.168.1.108:19000/--/login"
            else:
                context["status"] = False
                context[
                    "link_href"
                ] = f"http://{host}/verify-account/?token={token}&email={email}"

    except httpx.RequestError:
        context["loading"] = False
        context["status"] = False

    return render(request, "verify-account.html", context)
