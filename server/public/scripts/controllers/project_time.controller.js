app.controller('TimeController', ['$http', function ($http) {
    console.log('TimeController has been loaded');
    var self = this;
    self.message = "I am the Time page!"

    
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
                    self.project_time.list=response.data;
                })
                .catch((error) => {
                    console.log('error making project_time get request', error);
                })
        };
     
    // post guest 
    
        self.postNewGuestToDom = function (guestToAddToDom) {
            $http({
                method: 'POST',
                url: '/project_time',
                data: guestToAddToDom
            })
                .then((response) => {
                    self.project_time.guest = '';
                    self.project_time.start_date = '';
                    self.project_time.end_date = '';
                    self.project_time.total_hours = '';
                    self.project_time.image_path = '';
                    console.log(response);
                    self.enterNewGuest();
                })
                .catch((error) => {
                    console.log('error for post on guest', error);
                });
        }
    
    // remove guest
    
        self.removeGuest = function (project_time) {
            $http({
                method: 'DELETE',
                url: `/project_time/${project_time.id}`,
                data: project_time
            }).then((response) => {
                // self.enterNewGuest();
                console.log(response);
            })
            .catch((error) => {
                console.log('error making delete request guest', error);
                alert('Something went wrong! Check the server.');
            });
        }
        
        // Load data
        self.enterNewGuest();
    
    }]); //end GuestController