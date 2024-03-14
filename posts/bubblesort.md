---
title: "Bubble Sort Nedir?"
date: "Mar 15, 2024"
cover_image: ""
---


## Bubble Sort Algoritması Nedir?

Bu algoritma yukarıda da bahsedildiği gibi basit bir yapıya sahiptir ve karşılaştırma temelli bir algoritmadır. Çalışma prensibi; listedeki her bir elemanın yanındaki eleman ile karşılaştırılması ve ilk elemanın değeri, ikinci elemanın değerinden büyükse iki elemanın yer değiştirmesi şeklinde olmaktadır. Daha sonra ikinci ve üçüncü elemanların değerleri karşılaştırılır. İkinci elemanın değeri üçüncü elemanın değerinden büyükse bu iki eleman da yer değiştirir. Tüm dizi tamamen bitene dek bu işlem bu şekilde sürecektir. Tüm elemanlar teker teker hemen yanındaki elemanlar ile karşılaştırıldığından çok çalışan bir algoritma olduğu görüşü söz konusudur.

Bu algoritmayı insertion sort algoritmasından bariz şekilde ayıran özelliği küçük olarak tespit edilen elemanın araya giremiyor oluşudur. Yani örneklemek gerekirse üçüncü eleman 10 olsun ve ikinci eleman 15 olsun. Bu algoritma çalışırken 10 ile 15 kendi aralarında yer değiştirmektedirler. Küçük olan değer birince elemandan daha küçükse bile yanındakini ezip birinci elemana gidemeyecektir.

Dizideki tüm elemanlar birbirleri ile yer değiştirmiş olsa dahi dizi elemanları tamamen sıralanmamış olabilirler. Bu yüzden baştan yeni bir iterasyona başlanır ve aynı sıralama tekrar yapılır. Bu şekilde sonunda dizinin tamamı sıralanmış olur. Algoritmanın kaç iterasyonda kendisini bitirdiği de önemli bir ölçü olacaktır.

### **Zaman Karmaşıklığı:**

Tüm elemanları tek tek ve birden fazla kez gezdiği için en kötü durum (Worst Case) O(N^2), En iyi durum (Best Case) ise O(n) olur.

#### **Örnek:**

20,15,5,1,9,13 sayı dizisini kabarcık sıralama algoritması ile sıralayalım.

1.  ilk iki eleman birbirleri ile kıyas edilir. 15 < 20 olduğu için yer değiştirir. 15,20,5,1,9,13 olur.
2.  ikinci ve üçüncü elemanlar birbirleri ile kıyas edilir. 5 < 20 olduğu için yer değiştirir. 15,5,20,1,9,13 olur. Dikkat: Insertion Sort olsaydı 5 değeri en başa (araya ekleme) girerdi.
3.  üçüncü ve dördüncü elemanlar kıyas edilir. 1 < 20 olduğu için yer değiştirir ve 15,5,1,20,9,13 olur.
4.  dördüncü ve beşinci elemanlar kıyas edilir. 20 > 9 olduğu için yer değiştirilir. 15,5,1,9,20,13 olur.
5.  beşinci ve altıncı elemanlar kıyas edilir. 13 < 20 olduğu için yer değiştirilir. 15,5,1,9,13,20 olarak son halini alır.

Yukarıdaki beş adımda birinci iterasyon tamamlanmıştır ancak sayılar halen sıralı değildir. Bu yüzden ikinci iterasyona başlanılır ve aynı işlemler aşağıdaki gibi tekrar edilir.

1.  ilk iki elemana bakılır 15 > 5 olduğu için yer değiştirilir. 5,15,1,9,13,20 olur.
2.  ikinci ve üçüncü elemana bakılır. 15 > 1 olduğu için yer değiştirilir. 5,1,15,9,13,20 olur.
3.  üçüncü ve dördüncü elemana bakılır. 15 > 9 olduğu için yer değiştirilir. 5,1,9,15,13,20 olur.
4.  dördüncü ve beşinci elemana bakılır. 15 > 13 olduğu için yer değiştirilir. 5,1,9,13,15,20 olur.
5.  beşinci ve altıncı elemana bakılır. 15 < 20 olduğu için bir şey yapılmaz. 5,1,9,13,15,20 olarak kalır.

Yukarıdaki beş adımda ise ikinci iterasyon tamamlanmış olur ancak dizi halen sıralı değildir. Bu yüzden üçüncü iterasyona başlanılır ve aşağıdaki işlemler yapılır.

1.  ilk iki elemana bakılır. 5 > 1 olduğu için yer değiştirilir. 1,5,9,13,15,20 olur.
2.  ikinci ve üçüncü elemanlara bakılır sıralı olduğu için bir şey yapılmaz.
3.  üçüncü ve dördüncü elemanlara bakılır sıralı olduğu için bir şey yapılmaz.
4.  dördüncü ve beşinci elemanlara bakılır sıralı oluğu için bir şey yapılmaz.
5.  beşinci ve altıncı elemanlara bakılır sıralı olduğu için bir şey yapılmaz.

Böylelikle üç iterasyonda veriler sıralanmış olur