<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Survey</title>

</head>

<body>
    <div class="container mt-5">
  
        <div class="row">
            <div class="col-md-4 border border-light">
                <h4 class="font-weight-bold text-center mt-3">Quick survey</h4>

                <p class="text-center">Your rating:</p>
                <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-179" value="option1" checked>
                    <label class="form-check-label" for="radio-179">Very good</label>
                </div>

                <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-279" value="option2">
                    <label class="form-check-label" for="radio-279">Good</label>
                </div>

                <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-379" value="option3">
                    <label class="form-check-label" for="radio-379">Mediocre</label>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-479" value="option4">
                    <label class="form-check-label" for="radio-479">Bad</label>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-579" value="option5">
                    <label class="form-check-label" for="radio-579">Very bad</label>
                </div>
                <button type="button" class="btn btn-primary">Prev question</button>
                <button type="button" class="btn btn-secondary">Next question</button>
            </div>
            
        </div>
    </div>
</body>

</html>