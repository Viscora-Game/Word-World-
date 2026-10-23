# Word & World — MongoDB Atlas Liderlik Tablosu Kurulum Kılavuzu

Bu backend servisi, **Word & World** mobil kelime oyununun dünya genelindeki tüm oyuncularının skorlarını (yıldız, seviye, lig) MongoDB cluster'ınızda canlı olarak senkronize eder.

---

## 🚀 3 Adımda MongoDB Atlas Cluster Kurulumu

### 1. MongoDB Atlas Ücretsiz Cluster Açma (1 Dakika)
1. [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) adresine gidin ve ücretsiz hesap açın (veya mevcut hesabınızla giriş yapın).
2. **"Create a deployment"** butonuna basıp **M0 (Ücretsiz / Free)** seçeneğini seçin.
3. Bir cluster adı verin (Örn: `WordWorldCluster`) ve **Create** butonuna tıklayın.
4. **Security Quickstart** ekranında:
   - Bir veritabanı kullanıcı adı ve şifresi belirleyin (Örn: `wordworld_admin` / şifreniz).
   - **IP Access List** kısmında **"Allow Access from Anywhere" (`0.0.0.0/0`)** seçeneğini ekleyin.
5. **Database -> Connect -> Drivers (Node.js)** seçeneğine tıklayın ve bağlantı dizesini (`connection string`) kopyalayın:
   ```
   mongodb+srv://<kullanici_adi>:<sifre>@wordworldcluster.xxxxx.mongodb.net/word_world?retryWrites=true&w=majority
   ```

---

### 2. Sunucuyu Başlatma
1. `server/` klasöründe `.env.example` dosyasını kopyalayıp `.env` adında yeni bir dosya oluşturun:
   ```powershell
   copy .env.example .env
   ```
2. `.env` dosyası içine MongoDB Atlas'tan aldığınız bağlantı linkinizi yapıştırın.
3. Paketleri yükleyip çalıştırın:
   ```bash
   cd server
   npm install
   npm start
   ```

Sunucu başarıyla açıldığında konsolda:
`✅ MongoDB Cluster Connected successfully!`  
`🚀 Word & World Leaderboard Server running on port 5000` yazacaktır.

---

### 3. Frontend ile Canlı Bağlantı
Frontend projesinin kök dizinindeki `.env` veya GitHub Actions environment variables kısmına:
```env
VITE_API_URL=http://localhost:5000
```
(Canlıda Render.com / Railway / Vercel üzerinde barındırdığınızda o adresi `VITE_API_URL=https://sizin-api-adresiniz.com` olarak eklemeniz yeterlidir).
Sunucu bağlantısı olmadığında oyun otomatik olarak yerel akıllı önbelleği kullanır; böylece oyun hiçbir zaman çökmez veya donmaz.
