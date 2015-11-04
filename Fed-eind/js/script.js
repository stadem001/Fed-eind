/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var formProject = document.getElementById('project');
var formStage = document.getElementById('stage');
var radioProject = document.querySelector('input[name=submit-for][value=project]');
var radioStage = document.querySelector('input[name=submit-for][value=stage]');

formProject.classList.add('hide');
formStage.classList.add('hide');

radioProject.addEventListener('click', function(){
    formProject.classList.remove('hide');
    formStage.classList.add('hide');
});

radioStage.addEventListener('click', function(){
    formProject.classList.add('hide');
    formStage.classList.remove('hide');
});

