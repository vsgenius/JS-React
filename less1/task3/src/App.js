import './App.css';

function App() {
  const now = new Date();

  // внутри компонента App:
  return (
    <Calendar date={now} />
  );
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
}

function Calendar(date) {
  const dayString = {1:'Понедельник',2:'Вторник',3:'Среда',4:'Четверг',5:'Пятница',6:'Суббота',7:'Воскресенье'}
  const fullMonth = {1:'Января',2:'Февраля',3:'Марта',4:'Апреля',5:'Мая',6:'Июня',7:'Июля',8:'Августа',9:'Сентября',10:'Октября',11:'Ноября',12:'Декабря'}
  return (
    <div className="ui-datepicker">
  <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{dayString[date.date.getDay()]}</div>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{date.date.getDate()}</div>
      <div className="ui-datepicker-material-month">{fullMonth[date.date.getMonth()+1]}</div>
      <div className="ui-datepicker-material-year">{date.date.getFullYear()}</div>
    </div>
  </div>
  <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">{date.date.getMonth()+1}</span>&nbsp;<span class="ui-datepicker-year">{date.date.getFullYear()}</span>
    </div>
  </div>
  <table className="ui-datepicker-calendar">
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="ui-datepicker-other-month">28</td>
        <td className="ui-datepicker-other-month">29</td>
        <td className="ui-datepicker-other-month">30</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
      <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td className="ui-datepicker-today">10</td>
        <td>11</td>
      </tr>
      <tr>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
      </tr>
      <tr>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
      </tr>
      <tr>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td>31</td>
        <td className="ui-datepicker-other-month">1</td>
      </tr>
    </tbody>
  </table>
</div>);
}

export default App;
