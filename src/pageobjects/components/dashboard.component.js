class Dashboard {
   
    header () {
        return $("//*[@id=\"header_container\"]/div[@class=\"primary_header\"]/div[@class=\"header_label\"]/div");
    }
}

module.exports = Dashboard;


/*

("//*[@id=\"header_container\"]/div[1]/div[2]/div");*/
