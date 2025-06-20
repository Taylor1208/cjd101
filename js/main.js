// 命名一個功能叫做 page_change
function page_change(page_name) {
    // 使用該功能傳入的參數叫做 page_name
    //▼console.log是指印出括弧內的參數，console 想像成「瀏覽器內建的筆記本」，通常用來除錯排查，括弧內等於寫筆記，也就是文字的格式如何設定
    console.log("Changing page to: " + page_name);
    //let是變數(可樂瓶，有蓋子，裡面可換內容)，content是變數的名稱，也就是在index裡面設定好的第二個body，document(文件的意思).getElementById(動作=在這份文件裏頭，找一個content的元素)
    let content = document.getElementById("content");
    // let url(網址的意思，自己命名用) = "http://127.0.0.1:5500/"(電腦的ip位址，這是本機ip位址)，+ page_name(參數，這個參數會在index裡面設定好)，+ ".html"(這是網頁的副檔名) 就可以叫出詳細且完整的網址
    // 這個網址是指在本機電腦上，開啟的網頁

    //GIT
    let url = "https://taylor1208.github.io/cjd101/" + page_name + ".html"
    //測試
    // let url = "http://127.0.0.1:5500/" + page_name + ".html"

    // http://127.0.0.1:5500/about.html
    fetch(url)
        .then(async res => {
            let data = await res.text(); // 等待回應的文字內容
            console.log(content.innerHTML)
            if (page_name == "index") {
                document.body.innerHTML = data; // 如果是index頁面，則直接覆蓋整個body的內容
            } else {
                content.innerHTML = data; // 將內容覆蓋content元素中,innerHTML是指元素的內部HTML內容

            }
            hub_end()


            console.log(data);
        })

}

function hub_open() {
    const hubList = document.getElementById("hub-listall");
    hubList.classList.toggle("open");
    const end = document.getElementById("end")
    end.style.display = 'block';
}

function hub_end() {
    const hubList = document.getElementById("hub-listall");
    const endElement = document.getElementById("end");
    hubList.classList.remove("open");
    end.style.display = 'none';
}


