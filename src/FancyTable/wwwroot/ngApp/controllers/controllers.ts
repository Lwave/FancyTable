namespace FancyTable.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';

        
    }

    export class ContactController {
        public allPerson;
        public person;
        public PersonResource;

        public getPerson() {
            this.allPerson = this.PersonResource.query();
        }

        public save() {
            this.PersonResource.save(this.person).$promise.then(() => {
                this.person = null;
                this.getPerson();
            });
        }
        constructor(public $resource: angular.resource.IResourceService) {

            this.PersonResource = $resource('/api/person/:id');
            this.getPerson();
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

    
}
