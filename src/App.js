import React from 'react';
import Info from './MyProject_components/info'
import Form from './MyProject_components/form'
import Weather from './MyProject_components/weather_info'


const API_KEY = "e6da5661b2413ba9de480ce46b51dd5f";

class App extends React.Component {

  state = {                       //------создаем блок который будет хранить нужные нам параметры
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    wind: undefined,
    error: undefined
  }

  gettingWeather = async (event) => {
  event.preventDefault();   //---- удаление перезапуска страницы
  var city = event.target.elements.city.value;
  

  if(city) {            //проверка на заполнение поля
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();   

    var sunset = data.sys.sunset;
    var date = new Date();
    date.setTime(sunset);
    var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      
  this.setState({
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    pressure: data.main.pressure,
    sunset: sunset_date,
    wind: data.wind.speed,
    error:undefined
    });
  } else {
    this.setState({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    wind: undefined,
    error: "Введите название города"
    });
  }
}

  render() {
    return (
      <div className='wrapper'>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather}/>
                <Weather 
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                pressure={this.state.pressure}
                sunset={this.state.sunset}
                wind={this.state.wind}
                error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
