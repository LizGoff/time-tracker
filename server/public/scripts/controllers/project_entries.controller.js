app.controller('EntriesController', ['$http', function ($http) {
    console.log('EntriesController has been loaded');

    var self = this;
    self.message = "I am the Entries page!"

    self.project_entries = {
        list: []
    };

    self.project_time = {
        list: []
    };

    // add new guest

    self.enterNewGuest = function () {
        $http({
            method: 'GET',
            url: '/project_time',
        })
            .then((response) => {
                console.log(response);
                self.project_time.list = response.data;
            })
            .catch((error) => {
                console.log('error making project_time get request', error);
            })
    };



    // add new entry

    self.enterNewEntry = function () {

        $http({
            method: 'GET',
            url: '/project_entries',
        })
            .then((response) => {
                console.log(response);
                self.project_entries.list = response.data;
            })
            .catch((error) => {
                console.log('error making project_entries get request', error);
            })
    };



    // post entry 

    self.postNewEntryToDom = function (entryToAddToDom) {
        self.doMath = function () {
            console.log(self.project_entries.start_time);
            var sum1 = self.project_entries.start_time;
            var sum2 = self.project_entries.end_time;
            var taco = sum1 + sum2;
            self.project_entries.total_hours = taco;
        };
        self.doMath();
        $http({
            method: 'POST',
            url: '/project_entries',
            data: entryToAddToDom
        })
            .then((response) => {
                self.project_entries.items_completed = '';
                self.project_entries.guest = '';
                self.project_entries.date = '';
                self.project_entries.start_time = '';
                self.project_entries.end_time = '';
                self.project_entries.total_hours = '';
                self.project_entries.image_path = '';
                console.log(response);
                self.enterNewEntry();
            })
            .catch((error) => {
                console.log('error making request for post', error);
            });

    }

    // remove new entry

    self.removeEntry = function (project_entries) {
        $http({
            method: 'DELETE',
            url: `/project_entries/${project_entries.id}`,
            data: project_entries
        }).then((response) => {
            self.enterNewEntry();
            // self.enterNewGuest();
            console.log(response);
        })
            .catch((error) => {
                console.log('error making delete request', error);
                alert('Something went wrong! Check the server.');
            });
    }

    self.removeGuest = function (project_time) {
        $http({
            method: 'DELETE',
            url: `/project_time/${project_time.id}`,
            data: project_time
        }).then((response) => {
            self.enterNewGuest();
            console.log(response);
        })
        .catch((error) => {
            console.log('error making delete request guest', error);
            alert('Something went wrong! Check the server.');
        });
    }


    // Load data
    self.enterNewGuest();
    self.enterNewEntry();
}]); //end EntryController
