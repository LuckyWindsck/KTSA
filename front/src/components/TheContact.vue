<template>
  <section class="ktsa-contact">
    <div class="contact-title">・CONTACT</div>
    <article class="contact-content">
      <h1>三田キャンパス</h1>
      <p>
        住所｜〒108-8345　東京都港区三田2-15-45<br />
        学部｜文学部（2～4年）、経済・法・商学部（3・4年）、文学・経済学・法学・社会学・商学・法務研究科<br />
        キャンパス長｜Iharu（Facebook：中台 伊晴）<br />
      </p>
      <h1>日吉キャンパス</h1>
      <p>
        住所｜〒223-8521　神奈川県横浜市港北区日吉4-1-1<br />
        学部｜文・医・薬学部1年、経済・法・商・理工学部（1・2年）、経営管理研究科、システムデザイン・マネジメント研究科、メディアデザイン研究科<br />
        キャンパス長｜Heather（Facebook：Heather Shen）<br />
      </p>
      <h1>湘南藤沢キャンパス</h1>
      <p>
        住所｜〒252-0882　神奈川県藤沢市遠藤5322<br />
        学部｜総合政策学部、環境情報学部、看護医療学部（1・2・4年）、政策・メディア研究科、健康マネジメント研究科<br />
        キャンパス長｜陳貝瓜（Facebook：陳姵樺）<br />
      </p>
    </article>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
.ktsa-contact {
  color: var(--KTSA-fg-blue);

  @mixin ktsa_section;
}
.contact-title {
  @mixin ktsa_page_title;
}
.contact-content {
  @mixin ktsa_page_content;
}
</style>
