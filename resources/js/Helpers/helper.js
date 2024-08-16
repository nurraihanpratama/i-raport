import dayjs from "dayjs";
import "dayjs/locale/id"; // Import the desired locale

export const getParameterFromUrl = (field, current_url = null) => {
    // Get the URL of the current page
    const currentUrl = current_url ?? window.location.href;
    // Create a URLSearchParams object from the query parameters of the URL
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    // Get the 'search' parameter value
    const fieldValue = searchParams.get(field);

    return fieldValue;
};

export const urlModifier = (current_url, parameter, query) => {
    const url = new URL(current_url);
    const search_params = url.searchParams;
    search_params.set(parameter, query);
    url.search = search_params.toString();
    return url.toString();
};

export const capitalize = (words) => {
    if (words) {
        var separateWord = words.toLowerCase().split(" ");
        for (var i = 0; i < separateWord.length; i++) {
            separateWord[i] =
                separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(" ");
    } else {
        return "";
    }
};

export const uppercase = (words) => {
    if (words) {
        return words.toUpperCase();
    } else {
        return "";
    }
};

export const fDate = (date, separator = "/") => {
    return dayjs(date).format(`DD${separator}MM${separator}YYYY`);
};

export const fDay = (date, format = "dddd, D MMMM YYYY") => {
    return dayjs(date).locale("id").format(format);
};

export const fInt = (integer) => {
    const total = parseInt(integer ?? 0);
    const number = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return number;
};

export const fCurrency = (integer) => {
    return parseFloat(integer).toLocaleString("id-ID");
};

export const moneyFormatter = (integer) => {
    const total = parseInt(integer);
    const number = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return number;
};

export const localeDate = (date) => {
    dayjs.locale("id");
    return dayjs(date).locale("id").format("dddd, D MMM YYYY");
};

export const fullDate = (date) => {
    return dayjs(date).format("dddd, D MMM YYYY HH:mm:ss");
};

export const formatDate = (
    date,
    format = "dddd, D MMM YYYY",
    locale = "id"
) => {
    dayjs.locale(locale);

    return dayjs(date).locale(locale).format(format);
};

export const getIdFromSelectOption = (data, array, check, fallback) => {
    return data
        ? array.find((dt) => {
              return check ? dt.id == data : dt.old_id == data;
          }).id
        : fallback;
};

export const countProrateDays = (start_date) => {
    const start = dayjs(start_date, "YYYY-MM-DD");
    const end = dayjs(start_date, "YYYY-MM-DD").endOf("month");
    const count = end.diff(start, "days") + 1;
    return count;
};

export const insertFieldAfterThisField = (
    array,
    fieldToInsertAfter,
    newObj
) => {
    const index = array.findIndex((item) => item.field === fieldToInsertAfter);
    if (index !== -1) {
        array.splice(index + 1, 0, newObj);
    }
};

export const getRecommendDateForAdjustment = (subscription) => {
    if (
        subscription.unpaid_invoices &&
        subscription.unpaid_invoices.length > 0
    ) {
        return dayjs(subscription.unpaid_invoices[0].inv_date).format(
            "YYYY-MM-DD"
        );
    } else if (
        subscription.finished_invoices &&
        subscription.finished_invoices.length > 0
    ) {
        const last_finished_invoice_date = dayjs(
            subscription.finished_invoices[0].inv_date
        );
        const recommend_date = last_finished_invoice_date
            .add(1, "month")
            .startOf("month");
        return dayjs(recommend_date).format("YYYY-MM-DD");
    } else {
        return null;
    }
};

export const strictNumberValidation = (number) => {
    const isValidInteger = /^0$|^[1-9]\d*$/.test(number);

    if (isNaN(parseInt(number)) || !isValidInteger) {
        return false;
    }
    return true;
};

export const getMaxWidth = (width) => {
    // Given examples
    const A1 = 400;
    const B1 = 115;
    const A2 = 580;
    const B2 = 280;

    // Calculate the slope (m)
    const m = (B2 - B1) / (A2 - A1);

    // Calculate the y-intercept (b)
    const b = B1 - m * A1;

    // Function to calculate B for a given A
    const calculateB = (A) => m * A + b;

    // Test with A = 450
    const A_test = window.innerWidth;
    return calculateB(A_test);
};

export const fetchErrorCatch = (error, callback = null) => {
    if (callback && typeof callback === "function") {
        setProcessing(false);
    }

    return error.response.status == 422
        ? alert(error.response.data.msg)
        : alert(import.meta.env.VITE_SYSTEM_ERROR_MESSAGE);
};

export const arrayFilter = (array, filter) => {
    const filteredArray = array.filter((item) => {
        for (const key in filter) {
            if (item[key] !== filter[key]) {
                return true;
            }
        }
        return false;
    });

    return filteredArray;
};

export const reportHeaderFilterOnExcel = (theOption, theFilter) => {
    if (theFilter) {
        const array = theFilter.split("-");
        const names = theOption
            .filter((b) => array.includes(b.id))
            ?.map((p) => p.name);
        return names;
    }

    return null;
};

export const getBase64Image = async (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            const dataURL = canvas.toDataURL("image/png");
            resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
        };
        img.onerror = (error) => reject(error);
    });
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// * THIS JUST FOR TESTING
export const generateFakeInvoices = (month, year, minAmount, maxAmount) => {
    // """
    // Generates an array of invoices with one invoice for each day of a month.

    // Args:
    //   month: The month (1-12)
    //   year: The year
    //   minAmount: The minimum amount for an invoice
    //   maxAmount: The maximum amount for an invoice

    // Returns:
    //   An array of invoices, where each invoice is a dictionary with keys
    //   'date' and 'amount'.
    // """

    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month

    const invoices = [];

    for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${month.toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}`;

        // Generate random amount within range
        const amount =
            Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
        invoices.push({ date, amount });
    }

    return invoices;
};
