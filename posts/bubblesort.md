---
title: "Bubble Sort Nedir?"
date: "Mar 15, 2024"
cover_image: ""
---

Merhaba arkadaşlar. Bugün sizlere sıralama(sorting) algoritmalarından biri olan Bubble Sort algoritmasından bahsetmek istiyorum.

## Bubble Sort Nedir?
Bubble sort, en basit sıralama algoritmalarından biridir. Karşılaştırma temelli olan bu algoritmada, listedeki her bir eleman yanındaki eleman ile karşılaştırılır. Eğer ilk elemanın değeri, ikinci elemanın değerinden büyükse, iki eleman yer değiştirir. Daha sonra ikinci ve üçüncü elemanların değerleri karşılaştırılır. İkinci elemanın değeri üçüncü elemanın değerinden büyükse bu iki eleman yer değiştirir ve bu işlem, tüm liste sıralanana kadar bu şekilde devam eder.
Bubble Sort’un Time Complexity’si:
Worst Case: O(n²) - Quadratic Time Complexity
Average Case O(n²) - Quadratic Time Complexity
Best Case O(n) - Linear Time Complexity [Tüm array sıralı ise sadece 1 kez iterasyon gerçekleştirilir]

HackerRank — Bubble Sort Algorithm
Bubble Sort Algoritması Nasıl Çalışır?
Örneğin yukarıda belirtilen listeyi ele alalım. [3,10,5,12,9,20]. Bubble sort kullanarak bu listeyi sıralayacak olursak eğer; Karşılaştırmaya öncelikle 3 ve 10 değerlerinin karşılaştırılması ile başlanır. 3, 10'dan küçük olduğu için yer değiştirmezler. Daha sonrasında 10 ve 5 değerleri karşılaştırılır. 10 5'ten büyük olduğu için yer değiştirirler ve iterasyon işlemleri bu şekilde liste elemanları sıralanana kadar devam eder.

```
Iterasyon : [3,5,10,9,12,20] → [3,5,10,9,12,20] → [3,5,10,9,12,20] → [3,5,9,10,12,20] → [3,5,9,10,12,20]
Iterasyon : [3,5,9,10,12,20] → [3,5,9,10,12,20] → [3,5,9,10,12,20] → [3,5,9,10,12,20] → [3,5,9,10,12,20] → [3,5,9,10,12,20]
```
Bu örneğimizde, 2 iterasyon gerçekleştirdikten sonra array elemanları sıralanmış olur.

Bubble sort algoritmasının örnek JavaScript kodu:


Bubble Sort algoritmasının Halk oyunları canlandırmasını da inceleyebilirsiniz :)


Bir mini yazının daha sonuna geldik. Eksik veya yanlış olduğunu düşündüğünüz kısımları bana iletirseniz çok sevinirim.