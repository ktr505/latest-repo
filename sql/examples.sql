SELECT *
FROM titanic
WHERE Sex = 'female'
    AND Survived = 1
    AND Age > 30;
SELECT AVG(Age) AS AvgAge
FROM titanic
WHERE Sex = 'male'
    AND Survived = 0;
SELECT *
FROM titanic
WHERE Fare BETWEEN 20 AND 50
    AND Embarked = 'C';
SELECT COUNT(*) AS TotalSurvivorsFirstClass
FROM titanic
WHERE Survived = 1
    AND Pclass = 1;
SELECT *
FROM titanic
WHERE Embarked = 'C'
    AND Fare > 75;