window.onload = function() {
    const folderPath = "images/"; // 画像フォルダのパス
    const imageFile = "image.jpg"; // 表示する画像ファイル名

    const imgElement = document.getElementById("displayed-image");
    imgElement.src = folderPath + imageFile;
};
