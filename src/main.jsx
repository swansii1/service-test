import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter} from "react-router-dom";
import { store } from "./redux/store.js";
import {
  Chart as ChartJS, // Обязательно импортируем Chart как ChartJS
  CategoryScale, // Для категорийных осей (например, метки на X-оси)
  LinearScale, // Для линейных осей (например, числовые значения на Y-оси)
  PointElement, // Для точек на линейном графике
  LineElement, // Для линий на линейном графике
  BarElement, // Для столбцов на столбчатом графике
  Title, // Для заголовка графика
  Tooltip, // Для всплывающих подсказок при наведении
  Legend, // Для легенды графика
  ArcElement, // Для круговых диаграмм
} from "chart.js";
import { Provider } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, 
);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
