1.Вывести названия двух произвольных треков с тегом awesome

db.tracks.aggregate([
    {$match: {tags: "awesome" }},
    {$sample: {size: 2 } },
    {$project: {title: 1, _id: 0}}
])
2. Вывести имя юзера с самым минимальным балансом

db.users.aggregate([
    {$sort: {balance: 1}}, 
    {$limit: 1 }, 
    {$project: {_id: 0, fullname: 1 }} 
])
3. Используя метод countDocuments(), вывести ко-во заблокированных юзеров с балансом от 10 до 1000 EUR
db.users.countDocuments({
    isBlocked: true, 
    balance: {$gte: 10, $lte: 1000} 
})
4.Используя метод aggregate(), вывести ко-во незаблокированных юзеров не из Germany и не из France с балансом до 1000 EUR

db.users.aggregate([
  {
    $match: {
      isBlocked: {$ne:true}, 
      country: { $nin: ["Germany", "France"] }, 
      balance: { $lte: 1000 } 
    }
  },
  {
    $count: "totalUsers" 
  }
])
5.Также очень коротко опишите, как работает агрегация в MongoDB

Агрегация - это инструмент для анализа, обработки данных, который позволяет получить вычесленные данные. Представляет собой конвеер, который содержит определённые этапы обработки.



