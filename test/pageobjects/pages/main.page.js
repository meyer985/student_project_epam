const Dashboard = require('../components/dashboard.component')

class MainPage {
        constructor() {
        this.dashboard = new Dashboard();
    }

    page() {
        return $('//*[@id="inventory_container"]');
    }
}

module.exports = MainPage;
