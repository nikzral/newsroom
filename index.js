
var getJSONinfo = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
var getJSONprice = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
var getJSONchange = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};


function search() {
    inp = document.getElementById("columnsearch").value;
    console.log(inp)
    var urlinfo = "https://cloud.iexapis.com/stable/stock/"+inp+"/quote?token=pk_d5dd1c0ccc7548239d9efd90a23468a6"
    var urldata = "https://cloud.iexapis.com/stable/stock/"+inp+"/company?token=pk_d5dd1c0ccc7548239d9efd90a23468a6"
    var urlprice = "https://cloud.iexapis.com/stable/stock/"+inp+"/quote?token=pk_d5dd1c0ccc7548239d9efd90a23468a6"
    var urlchange = "https://cloud.iexapis.com/stable/stock/"+inp+"/quote?token=pk_d5dd1c0ccc7548239d9efd90a23468a6"
    getJSONinfo(urlinfo,
        function(err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            var symbol = (data.symbol);
            var ismarketopen = (data.isUSMarketOpen);
            var name = (data.companyName)
            
            

            
            if (name.length > 24) {
                cutlength = name.length - 21
                name = name.slice(0, -cutlength)
                document.getElementById("namedisplay").innerHTML=name+"...";
            } else {
                document.getElementById("namedisplay").innerHTML=name;
            }
            document.getElementById("tickerdisplay").innerHTML=symbol;
            }
            if (ismarketopen == true) {
                document.getElementById("marketstatus").innerHTML="O";
                document.getElementById("marketstatus").style.backgroundColor="#71D419";
            } else {
                document.getElementById("marketstatus").innerHTML="C";
                document.getElementById("marketstatus").style.backgroundColor="red";
            }
        }
    )
    getJSONprice(urlprice,
        function(err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        }  else {
            
           
            var lprawraw = (data["latestPrice"]);
            var lpraw = lprawraw.toFixed(2);
            lp = "$" + (lpraw)
            document.getElementById("pricedisplay").innerHTML=lp;
        }
    }
    )
    getJSONchange(urlchange,
        function(err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        }  else {
            
            var lpraw2raw = (data["change"]);
            var lpraw2 = lpraw2raw.toFixed(2);
            lp2 =  (lpraw2) + "%" 
            document.getElementById("changedisplay").innerHTML=lp2;
            
             if  (lpraw2 < 0) {
                document.getElementById("changedisplay").style.backgroundColor="red";
            } else {
                document.getElementById("changedisplay").style.backgroundColor="#71D419";
            }
            
            
        }
    }
    )
    getJSONchange(urldata,
        function(err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        }  else {
            
            var exchangeraw = (data["exchange"]);
            var sector = (data["sector"]);
            console.log(exchangeraw)
            if (exchangeraw == "NEW YORK STOCK EXCHANGE, INC.") {
                exchange = "NYSE"
            } if (exchangeraw == "NASDAQ/NGS (GLOBAL SELECT MARKET)") {
                exchange = "NASDAQ"
            } else {
                
            }
            document.getElementById("exchangedisplay").innerHTML=exchange;
            
            
        }
    }
    )
};
