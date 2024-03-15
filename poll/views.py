from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView
def index(request):
    return HttpResponse(" Всім привіт! Це пробна сторінка. ")

def indexName(request, name):
    return render(request, 'index.html', {'name': name})

class MainPage(TemplateView):
    template_name = 'index.html'

class Test2(TemplateView):
    template_name = 'Test2.html'

class Test3(TemplateView):
     template_name = 'Test3.html'

def products(request, id):
    category = request.GET.get("cat", "")
    output = "<h2 style = 'color: red'>Product № {0} Category: {1}</h2>".format(id, category)
    return HttpResponse(output)


def fun(request, text="Clinick chaska"):
    change = text + ' ' + 'найкраща у світі'
    return render(request, 'index.html', {'change': change})


def color(request):
    dif = "style = background: red;"
    return render(request,'index.html',{'dif': dif})