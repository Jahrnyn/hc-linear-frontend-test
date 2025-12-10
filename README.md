## 1. Busz CRUD – Megvalósítás

**Funkcionális elemek**
- Buszok listázása táblázatos formában
- Új busz létrehozása modal ablakban
- Busz törlése a listából
- Busz részleteinek megjelenítése és szerkesztése külön oldalon (`/buses/:id`)

**Megoldás kulcspontjai**
- A buszok adatait TanStack Query (`useQuery`) tölti be.
- A CRUD műveletek saját Mutation hookokon futnak (`useCreateBusMutation`, `useUpdateBusMutation`, `useDeleteBusMutation`).
- Minden módosító művelet után query invalidation frissíti a listát.
- Az űrlapok kontrollált React state-et használnak, TypeScript típusokkal.
- A modal komponens z-index alapú overlay, külön route nélkül.

## 2. Board – Drag & Drop feladatkezelő

**Funkcionális elemek**
- Három státusz oszlop: `todo`, `in_progress`, `done`
- Feladatok áthúzhatók az oszlopok között
- Státuszváltás backendre mentve (`PATCH /tasks/:id`)
- Új feladat hozzáadása (title alapján)
- Feladat törlése a Board felületről

**Megoldás kulcspontjai**
- A feladatlista TanStack Queryvel töltődik be (`useBoardTasksQuery`).
- A státusz váltása külön mutációval történik (`useUpdateTaskStatusMutation`).
- Az oszlopok és kártyák csoportosítása `useMemo` segítségével történik.
- A drag & drop tiszta HTML5 API-ra épül:
  - a kártya `draggable`
  - `onDragStart` → task ID átadása
  - oszlop `onDragOver` → drop engedése
  - oszlop `onDrop` → státusz frissítés mutáción keresztül
- A vizuális felépítés a kapott design rendszerébe illesztve.

**Fejlesztési irányelvek**
- A business logika 100%-ban hookokba van szervezve, a komponensek tisztán UI-t tartalmaznak.
- A komponensek nem hívnak közvetlenül API-t, mindig a mutációs hookokat használják.
- Minden szerkezeti elem (Modal, Table, FormField) dedikált stílusfájlban van.
- Az állapotváltozások után query invalidation biztosítja a konzisztens cache-t.
- A Board drag & drop teljesen külső library-mentes, így könnyen karbantartható.

## 3. Projektfelépítés röviden

```
src/
 ├ api/              REST API hívások (Axios)
 ├ hooks/            Query + Mutation hookok
 ├ types/            TypeScript típusok
 ├ page/             Külön oldalak (Bus CRUD, Board)
 ├ component/        Újrafelhasználható UI elemek
 └ config/           Axios, QueryClient és routing konfigurációk
```

-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------

# HC Linear – Frontend Tesztfeladat

Ez a projekt egy React + TypeScript + Vite alapú frontend, amely két külön backendhez kapcsolódik.  

A feladat leírása megtalálható a kezdő oldalon, a projekt elindítása után.
---

## Minimum követelmények

- **Node.js 18+**
- **npm 9+** vagy **pnpm / yarn**
- **Docker + Docker Compose**

---

## Projekt indítása (frontend)

A projekt gyökérmappájában futtasd:

```bash
npm install
npm run dev
```

Ez elindítja a fejlesztői szervert, amely alapértelmezés szerint a `http://localhost:5173` címen érhető el.

## Backend indítása (Docker Compose)

A backend konfiguráció a `backend/` mappában található.
Az adatstruktúra megtekinthető a `backend/data` mappában található **json** fájlokban.

Lépj be:
```bash
cd backend
```

Indítsd el a JSON server konténereket:
```bash
docker compose up -d
```

Ez elindít két külön backend szolgáltatást:

### 1. CRUD Backend

```
URL: http://localhost:3001
Resource: /buses
```
Ez a backend szolgálja ki a buszokkal kapcsolatos alap CRUD műveleteket
(lista, lekérés, mentés, módosítás, törlés).
A feladat első része ehhez a végponthoz kapcsolódik.

### 2. Board Backend

```
URL: http://localhost:3002
Resource: /board
```

## Általános API végpontok (clue/json-server)

| Művelet             | HTTP                   | Leírás                         |
| ------------------- | ---------------------- | ------------------------------ |
| Lista lekérése      | `GET /resource`        | Összes elem lekérése           |
| Egy elem lekérése   | `GET /resource/:id`    | Egy elem részletes adatai      |
| Új elem létrehozása | `POST /resource`       | Új bejegyzés mentése           |
| Elem módosítása     | `PATCH /resource/:id`  | Egy tétel részleges módosítása |
| Teljes csere        | `PUT /resource/:id`    | Egy tétel teljes újraírása     |
| Törlés              | `DELETE /resource/:id` | Egy elem törlése               |
