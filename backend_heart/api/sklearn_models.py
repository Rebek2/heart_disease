



def predict_forest(data,model):
    dict = {}
    prob = model.predict_proba(data)
    result = model.predict(data)
    prob2 = prob[-1]
    #dict['prob'] = prob2[-1]
    dict['result'] = result[0]
    dict['probab'] = round(prob2[-1]*100)
    dict['res'] = True
    if dict['result'] == 1.0:
        dict['response'] = 'Duże ryzyko wystąpienia chorób serca!!'
    else:
        dict['response'] = 'Małe ryzyko wystąpienia chorób serca'
    return dict
