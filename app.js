(function () {
    $(document).ready(() => {
        getQuestion();
        $("#answer").on("keyup", evaluate);
        $("#digits").on("change",getQuestion);
    });

    let past = "";
    let num_a;
    let num_b;
    let curr_answer;

    const getNumber = function () {
        let digits = parseInt($("#digits").val());
        let number = "";
        for (i = 0; i < digits; i++) {
            number += Math.floor((Math.random() * 9) + 1);
        }
        return parseInt(number);
    };

    const getQuestion = function () {
        $("#answer").val("");
        num_a = getNumber();
        num_b = getNumber();
        let question = `${num_a} + ${num_b} = `;
        $("#question").html(question);
        curr_answer = num_a + num_b;
        location.href=("#answer");

    };

    const evaluate = function (e) {
        if (e.keyCode !== 13) return;
        let answer = parseInt($("#answer").val());
        let color = answer === curr_answer ? "green" : "red";
        past += `<span style="color:${color}">${num_a} + ${num_b} = ${curr_answer}</span><br/>`;
        $("#past").html(past);
        getQuestion();

    };
})();

