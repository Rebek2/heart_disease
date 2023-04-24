
# Heart disease web application prediction

This is the application that is the extend of https://github.com/adamsoja1/heart_machine_learning repository


## Backend
Backend created in Django Rest Framework with one simple API view request, that uses trained model:

![api](https://imgur.com/G8WxhCZ.png)


Model in repository is named: RANDOMFORESTMODEL.sav. To open model, the pickle library was used.

Api view requires 8 different keys and its values, i.e: HighBP, HighChol, Stroke, GenHlth, PhysHlth, DiffWalk, Sex, Age.

HighBP, HighChol, Stroke, Sex, DiffWalk  are the answers : 0,1 in most cases No-Yes. GenHlth and Age are categorical values. Last but not least PhysHlth is number of days in range 0-30.
## Frontend
Frontend was implemented in React.js. In addition particles.tx and CSS templates were used for funny appearance.

![front](https://imgur.com/aWffP2f.png)
## How does it work?
We just answer the questions provided on webpage and then, when everything is set we press "Sprawdź" button.

The output always will be in percentage, which is the chance to get heart disease.

![output](https://imgur.com/Tc0xx4N.png)

Application doesn't save answered questions so the questionnaire is anonymous.
## Technologies

**Frontend:** React, CSS, HTML

**Backend:** Python, Pandas, numpy, scikit-learn, pickle 


## Authors

- [@adamsoja1](https://github.com/adamsoja1)

