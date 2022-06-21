from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from . import sklearn_models
from rest_framework.decorators import api_view, parser_classes
from sklearn.ensemble import RandomForestClassifier
import pickle
import pandas as pd
import os

# Create your views here.
@api_view(['GET','POST'])
def Forest(request):
    if request.method == 'POST':
        filename = "/Users/adam/backend/backend_heart/api/RANDOMFORESTMODEL.sav"
        forest = pickle.load(open(filename, 'rb'))
        data = request.data
        datafr = pd.DataFrame(data,index=[0])
        result = sklearn_models.predict_forest(datafr,forest)
        return Response(result)
    return Response({'Forest':'Forest'})


@api_view(['GET','POST'])
def test(request):
    if request.method == 'POST':
        data = request.data
        return Response(data)
    return Response({'Forest':'Forest'})