// Core Data Definitions

const SCHEDULES = {
  Monday: [
    { name: "Wake up & prep", start: "06:45", end: "07:00", type: "rest" },
    { name: "Gate lecture", start: "07:00", end: "09:00", type: "gate" },
    { name: "Cardio & core + Breakfast + Prep", start: "09:00", end: "09:50", type: "gym" },
    { name: "Transition", start: "09:50", end: "10:00", type: "transition" },
    { name: "College", start: "10:00", end: "11:50", type: "college" },
    { name: "Transition", start: "11:50", end: "12:00", type: "transition" },
    { name: "Lunch", start: "12:00", end: "12:20", type: "college" },
    { name: "Transition", start: "12:20", end: "12:30", type: "transition" },
    { name: "Power nap", start: "12:30", end: "13:45", type: "rest" },
    { name: "Transition", start: "13:45", end: "14:00", type: "transition" },
    { name: "College", start: "14:00", end: "14:50", type: "college" },
    { name: "Transition / Free Block", start: "14:50", end: "15:20", type: "transition" },
    { name: "Gate lecture", start: "15:20", end: "16:50", type: "gate" },
    { name: "Transition", start: "16:50", end: "17:00", type: "transition" },
    { name: "Gym (Push)", start: "17:00", end: "17:30", type: "gym" },
    { name: "Snacks + freshup", start: "17:30", end: "18:00", type: "gym" },
    { name: "Gate lecture", start: "18:00", end: "20:00", type: "gate" },
    { name: "Dinner", start: "20:00", end: "20:30", type: "rest" },
    { name: "Tcs exam", start: "20:30", end: "23:30", type: "tcs" },
    { name: "Gate lecture", start: "23:30", end: "00:30", type: "gate", endIsNextDay: true },
    { name: "Prep for sleep", start: "00:30", startIsNextDay: true, end: "00:45", endIsNextDay: true, type: "transition" },
    { name: "Sleep", start: "00:45", startIsNextDay: true, end: "06:45", endIsNextDay: true, type: "rest" }
  ],
  Tuesday: [
    { name: "Wake up & prep", start: "06:45", end: "07:00", type: "rest" },
    { name: "Gate lecture", start: "07:00", end: "09:00", type: "gate" },
    { name: "Cardio & core + Breakfast + Prep", start: "09:00", end: "09:50", type: "gym" },
    { name: "Transition", start: "09:50", end: "10:00", type: "transition" },
    { name: "College", start: "10:00", end: "10:50", type: "college" },
    { name: "Transition", start: "10:50", end: "11:00", type: "transition" },
    { name: "Gate lecture", start: "11:00", end: "11:50", type: "gate" },
    { name: "Lunch", start: "11:50", end: "12:20", type: "college" },
    { name: "Power nap", start: "12:20", end: "13:45", type: "rest" },
    { name: "Transition", start: "13:45", end: "14:00", type: "transition" },
    { name: "College", start: "14:00", end: "15:50", type: "college" },
    { name: "Transition", start: "15:50", end: "16:00", type: "transition" },
    { name: "Gate lecture", start: "16:00", end: "16:50", type: "gate" },
    { name: "Transition", start: "16:50", end: "17:00", type: "transition" },
    { name: "Gym (Pull)", start: "17:00", end: "17:30", type: "gym" },
    { name: "Snacks + freshup", start: "17:30", end: "18:00", type: "gym" },
    { name: "Gate lecture", start: "18:00", end: "20:00", type: "gate" },
    { name: "Dinner", start: "20:00", end: "20:30", type: "rest" },
    { name: "Tcs exam", start: "20:30", end: "23:30", type: "tcs" },
    { name: "Gate lecture", start: "23:30", end: "00:30", type: "gate", endIsNextDay: true },
    { name: "Prep for sleep", start: "00:30", startIsNextDay: true, end: "00:45", endIsNextDay: true, type: "transition" },
    { name: "Sleep", start: "00:45", startIsNextDay: true, end: "06:45", endIsNextDay: true, type: "rest" }
  ],
  Wednesday: [
    { name: "Wake up & prep", start: "06:45", end: "07:00", type: "rest" },
    { name: "Gate lecture", start: "07:00", end: "09:00", type: "gate" },
    { name: "Cardio & core + Breakfast + Prep", start: "09:00", end: "09:50", type: "gym" },
    { name: "Transition", start: "09:50", end: "10:00", type: "transition" },
    { name: "College", start: "10:00", end: "11:50", type: "college" },
    { name: "Transition", start: "11:50", end: "12:00", type: "transition" },
    { name: "Lunch", start: "12:00", end: "12:20", type: "college" },
    { name: "Transition", start: "12:20", end: "12:30", type: "transition" },
    { name: "Power nap", start: "12:30", end: "13:45", type: "rest" },
    { name: "Transition", start: "13:45", end: "14:00", type: "transition" },
    { name: "College", start: "14:00", end: "15:50", type: "college" },
    { name: "Transition", start: "15:50", end: "16:00", type: "transition" },
    { name: "Gate lecture", start: "16:00", end: "16:50", type: "gate" },
    { name: "Transition", start: "16:50", end: "17:00", type: "transition" },
    { name: "Gym (Legs)", start: "17:00", end: "17:30", type: "gym" },
    { name: "Snacks + freshup", start: "17:30", end: "18:00", type: "gym" },
    { name: "Gate lecture", start: "18:00", end: "20:00", type: "gate" },
    { name: "Dinner", start: "20:00", end: "20:30", type: "rest" },
    { name: "Tcs exam", start: "20:30", end: "23:30", type: "tcs" },
    { name: "Gate lecture", start: "23:30", end: "00:30", type: "gate", endIsNextDay: true },
    { name: "Prep for sleep", start: "00:30", startIsNextDay: true, end: "00:45", endIsNextDay: true, type: "transition" },
    { name: "Sleep", start: "00:45", startIsNextDay: true, end: "06:45", endIsNextDay: true, type: "rest" }
  ],
  Thursday: [
    { name: "Wake up & prep", start: "06:45", end: "07:00", type: "rest" },
    { name: "Gate lecture", start: "07:00", end: "09:00", type: "gate" },
    { name: "Cardio & core + Breakfast + Prep", start: "09:00", end: "09:50", type: "gym" },
    { name: "Transition", start: "09:50", end: "10:00", type: "transition" },
    { name: "College", start: "10:00", end: "10:50", type: "college" },
    { name: "Transition", start: "10:50", end: "11:00", type: "transition" },
    { name: "Gate lecture", start: "11:00", end: "11:50", type: "gate" },
    { name: "Lunch", start: "11:50", end: "12:20", type: "college" },
    { name: "Power nap", start: "12:20", end: "13:45", type: "rest" },
    { name: "Transition", start: "13:45", end: "14:00", type: "transition" },
    { name: "College", start: "14:00", end: "2:50", type: "college" },
    { name: "Transition / Free Block", start: "14:50", end: "15:20", type: "transition" },
    { name: "Gate lecture", start: "15:20", end: "16:50", type: "gate" },
    { name: "Transition", start: "16:50", end: "17:00", type: "transition" },
    { name: "Gym (Push)", start: "17:00", end: "17:30", type: "gym" },
    { name: "Snacks + freshup", start: "17:30", end: "18:00", type: "gym" },
    { name: "Gate lecture", start: "18:00", end: "20:00", type: "gate" },
    { name: "Dinner", start: "20:00", end: "20:30", type: "rest" },
    { name: "Tcs exam", start: "20:30", end: "23:30", type: "tcs" },
    { name: "Gate lecture", start: "23:30", end: "00:30", type: "gate", endIsNextDay: true },
    { name: "Prep for sleep", start: "00:30", startIsNextDay: true, end: "00:45", endIsNextDay: true, type: "transition" },
    { name: "Sleep", start: "00:45", startIsNextDay: true, end: "06:45", endIsNextDay: true, type: "rest" }
  ],
  Friday: [
    { name: "Wake up & prep", start: "06:45", end: "07:00", type: "rest" },
    { name: "Gate lecture", start: "07:00", end: "09:00", type: "gate" },
    { name: "Cardio & core + Breakfast + Prep", start: "09:00", end: "09:50", type: "gym" },
    { name: "Transition", start: "09:50", end: "10:00", type: "transition" },
    { name: "College", start: "10:00", end: "10:50", type: "college" },
    { name: "Transition", start: "10:50", end: "11:00", type: "transition" },
    { name: "Gate lecture", start: "11:00", end: "11:50", type: "gate" },
    { name: "Lunch", start: "11:50", end: "12:20", type: "college" },
    { name: "Power nap", start: "12:20", end: "13:45", type: "rest" },
    { name: "Transition", start: "13:45", end: "14:00", type: "transition" },
    { name: "Gate lecture", start: "14:00", end: "16:00", type: "gate" },
    { name: "Gate lecture", start: "16:00", end: "16:50", type: "gate" },
    { name: "Transition", start: "16:50", end: "17:00", type: "transition" },
    { name: "Gym (Pull)", start: "17:00", end: "17:30", type: "gym" },
    { name: "Snacks + freshup", start: "17:30", end: "18:00", type: "gym" },
    { name: "Gate lecture", start: "18:00", end: "20:00", type: "gate" },
    { name: "Dinner", start: "20:00", end: "20:30", type: "rest" },
    { name: "Tcs exam", start: "20:30", end: "23:30", type: "tcs" },
    { name: "Gate lecture", start: "23:30", end: "00:30", type: "gate", endIsNextDay: true },
    { name: "Prep for sleep", start: "00:30", startIsNextDay: true, end: "00:45", endIsNextDay: true, type: "transition" },
    { name: "Sleep", start: "00:45", startIsNextDay: true, end: "06:45", endIsNextDay: true, type: "rest" }
  ],
  Saturday: [
    { name: "Wake up & prep", start: "06:45", end: "07:00", type: "rest" },
    { name: "Gate lecture", start: "07:00", end: "09:00", type: "gate" },
    { name: "Cardio & core + Breakfast + Prep", start: "09:00", end: "09:50", type: "gym" },
    { name: "Transition", start: "09:50", end: "10:00", type: "transition" },
    { name: "Gate lecture", start: "10:00", end: "11:50", type: "gate" },
    { name: "Lunch", start: "11:50", end: "12:20", type: "college" },
    { name: "Power nap", start: "12:20", end: "13:45", type: "rest" },
    { name: "Transition", start: "13:45", end: "14:00", type: "transition" },
    { name: "Gate lecture", start: "14:00", end: "16:00", type: "gate" },
    { name: "Gate lecture", start: "16:00", end: "16:50", type: "gate" },
    { name: "Transition", start: "16:50", end: "17:00", type: "transition" },
    { name: "Gym (Legs)", start: "17:00", end: "17:30", type: "gym" },
    { name: "Snacks + freshup", start: "17:30", end: "18:00", type: "gym" },
    { name: "Gate lecture", start: "18:00", end: "20:00", type: "gate" },
    { name: "Dinner", start: "20:00", end: "20:30", type: "rest" },
    { name: "Tcs exam", start: "20:30", end: "23:30", type: "tcs" },
    { name: "Gate lecture", start: "23:30", end: "00:30", type: "gate", endIsNextDay: true },
    { name: "Prep for sleep", start: "00:30", startIsNextDay: true, end: "00:45", endIsNextDay: true, type: "transition" },
    { name: "Sleep", start: "00:45", startIsNextDay: true, end: "06:45", endIsNextDay: true, type: "rest" }
  ],
  Sunday: [
    { name: "Wake up & prep", start: "06:45", end: "07:00", type: "rest" },
    { name: "Gate lecture", start: "07:00", end: "09:00", type: "gate" },
    { name: "Cardio & core + Breakfast + Prep", start: "09:00", end: "09:50", type: "gym" },
    { name: "Transition", start: "09:50", end: "10:00", type: "transition" },
    { name: "Gate lecture", start: "10:00", end: "11:50", type: "gate" },
    { name: "Lunch", start: "11:50", end: "12:20", type: "college" },
    { name: "Power nap", start: "12:20", end: "13:45", type: "rest" },
    { name: "Transition", start: "13:45", end: "14:00", type: "transition" },
    { name: "Gate lecture", start: "14:00", end: "16:00", type: "gate" },
    { name: "Gate lecture", start: "16:00", end: "16:50", type: "gate" },
    { name: "Transition", start: "16:50", end: "17:00", type: "transition" },
    { name: "Gym (Rest day)", start: "17:00", end: "17:30", type: "gym" },
    { name: "Snacks + freshup", start: "17:30", end: "18:00", type: "gym" },
    { name: "Gate lecture", start: "18:00", end: "20:00", type: "gate" },
    { name: "Dinner", start: "20:00", end: "20:30", type: "rest" },
    { name: "Tcs exam", start: "20:30", end: "23:30", type: "tcs" },
    { name: "Gate lecture", start: "23:30", end: "00:30", type: "gate", endIsNextDay: true },
    { name: "Prep for sleep", start: "00:30", startIsNextDay: true, end: "00:45", endIsNextDay: true, type: "transition" },
    { name: "Sleep", start: "00:45", startIsNextDay: true, end: "06:45", endIsNextDay: true, type: "rest" }
  ]
};

const WORKOUT_SPLITS = {
  Push: [
    { name: "Dumbbell press", sets: 3, reps: "8–12" },
    { name: "Shoulder press", sets: 3, reps: "8–12" },
    { name: "Lateral raises", sets: 3, reps: "8-12" },
    { name: "Pec fly", sets: 3, reps: "12–15" },
    { name: "Tricep pushdowns", sets: 3, reps: "10–15" }
  ],
  Pull: [
    { name: "Weight-Assisted Pull-ups", sets: 3, reps: "6–10" },
    { name: "T-Bar Row", sets: 3, reps: "8–12" },
    { name: "Face Pulls", sets: 3, reps: "12–15" },
    { name: "Hammer Curls", sets: 3, reps: "10–12" },
    { name: "Reverse Wrist Curls", sets: 3, reps: "15–20" }
  ],
  Legs: [
    { name: "Leg press", sets: 3, reps: "10–15" },
    { name: "Romanian deadlift (RDL)", sets: 3, reps: "8–12" },
    { name: "Leg extension", sets: 3, reps: "12–15" },
    { name: "Hamstring Curls", sets: 3, reps: "10–15" },
    { name: "Calf raises", sets: 3, reps: "12–20" }
  ],
  "Rest day": []
};

const CARDIO_ROUTINE = [
  { name: "Burpees", sets: 5, reps: "10 reps" },
  { name: "Plank", sets: 5, reps: "15 breaths" }
];

const DIET_INVENTORY = [
  { id: "soya", name: "Soya chunks", qty: "100 g dry", protein: 51 },
  { id: "eggs", name: "Eggs", qty: "4 eggs", protein: 26 },
  { id: "milk", name: "Milk", qty: "500 ml", protein: 16 },
  { id: "dal", name: "Dal", qty: "2 cups - 120g", protein: 27 },
  { id: "chana", name: "Roasted chana", qty: "100g", protein: 21 }
];

const DIET_TARGET = 141; // Sum of all protein points

const WORKOUT_SPLIT_MAPPING = {
  Monday: "Push",
  Tuesday: "Pull",
  Wednesday: "Legs",
  Thursday: "Push",
  Friday: "Pull",
  Saturday: "Legs",
  Sunday: "Rest day"
};

// Global App State Variables
let autoHighlight = true;
let currentDayFilter = ""; // The day currently displayed on the Schedule tab
let activeWorkoutSplit = ""; // The workout routine currently displayed on the Workout tab
let systemTimeOverride = null; // Mock time for testing: { hours, minutes, dayName, dateStr }

// GATE Target Date: Feb 6, 2027
const GATE_TARGET_DATE = new Date("2027-02-06T00:00:00");

// DOM Cache
const dom = {
  clock: document.getElementById("live-clock"),
  date: document.getElementById("live-date"),
  gateDays: document.getElementById("gate-days"),
  gateHours: document.getElementById("gate-hours"),
  gateMins: document.getElementById("gate-mins"),
  gateSecs: document.getElementById("gate-secs"),
  
  tabBtns: document.querySelectorAll(".tab-btn"),
  tabPanels: document.querySelectorAll(".tab-panel"),
  
  focusCard: document.getElementById("live-focus-card"),
  focusGlow: document.getElementById("focus-glow-color"),
  focusBadge: document.getElementById("focus-badge"),
  focusTypeLabel: document.getElementById("focus-type-label"),
  focusStatusTime: document.getElementById("focus-status-time"),
  focusTitle: document.getElementById("focus-task-title"),
  focusTime: document.getElementById("focus-task-time"),
  focusProgressBar: document.getElementById("focus-progress-bar"),
  focusProgressPct: document.getElementById("focus-progress-pct"),
  focusTimeElapsed: document.getElementById("focus-time-elapsed"),
  focusTimeRemaining: document.getElementById("focus-time-remaining"),
  
  nextTaskWidget: document.getElementById("next-task-widget"),
  nextTaskPill: document.getElementById("next-task-pill"),
  nextTaskName: document.getElementById("next-task-name"),
  nextTaskTimeRange: document.getElementById("next-task-time-range"),
  
  workoutSplitBadge: document.getElementById("workout-split-badge"),
  workoutWidgetProgress: document.getElementById("workout-widget-progress"),
  workoutWidgetStatus: document.getElementById("workout-widget-status"),
  dietWidgetProgress: document.getElementById("diet-widget-progress"),
  dietWidgetStatus: document.getElementById("diet-widget-status"),
  
  weekdaySelector: document.getElementById("weekday-selector"),
  autoHighlightToggle: document.getElementById("auto-highlight-toggle"),
  timelineContainer: document.getElementById("timeline-container"),
  
  workoutSplitTitle: document.getElementById("workout-split-title"),
  workoutSplitToggleBtn: document.getElementById("btn-split-toggle"),
  exerciseList: document.getElementById("exercise-list"),
  cardioList: document.getElementById("cardio-list"),
  
  dietList: document.getElementById("diet-list"),
  macroProteinVal: document.getElementById("macro-protein-value"),
  macroProgressRing: document.getElementById("macro-progress-ring"),
  macroStatusText: document.getElementById("macro-status-text"),
  macroStatsConsumed: document.getElementById("macro-stats-consumed"),
  macroStatsTarget: document.getElementById("macro-stats-target"),
  macroStatsPct: document.getElementById("macro-stats-percentage")
};

// Utilities & Time Math

/**
 * Converts a HH:MM time string into minutes, optionally adding 24 hours (1440 mins) if it's past midnight.
 */
function timeToMinutes(timeStr, isNextDay = false) {
  const [h, m] = timeStr.split(":").map(Number);
  let total = h * 60 + m;
  if (isNextDay) {
    total += 24 * 60;
  }
  return total;
}

/**
 * Formats minutes relative to midnight back into AM/PM string representation.
 */
function minutesToClockStr(minutes) {
  let relativeMins = minutes % (24 * 60);
  let h = Math.floor(relativeMins / 60);
  let m = relativeMins % 60;
  let ampm = h >= 12 ? "PM" : "AM";
  let displayHour = h % 12;
  displayHour = displayHour === 0 ? 12 : displayHour;
  let displayMin = m < 10 ? "0" + m : m;
  return `${displayHour}:${displayMin} ${ampm}`;
}

/**
 * Determines current Logical Day status.
 * If current time is between 12:00 AM (0) and 06:44 AM (404),
 * we return the previous day's calendar date and name.
 */
function getLogicalTimeState() {
  let now = systemTimeOverride ? new Date(systemTimeOverride) : new Date();
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let timeInMins = hours * 60 + minutes;
  
  let logicalDate = new Date(now);
  
  // Logical day shift: 6:45 AM limit
  const isBeforeShift = timeInMins < 6 * 60 + 45;
  if (isBeforeShift) {
    logicalDate.setDate(logicalDate.getDate() - 1);
  }
  
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const logicalDayName = weekdays[logicalDate.getDay()];
  
  // Format Date String YYYY-MM-DD for storage indexing
  const yyyy = logicalDate.getFullYear();
  const mm = String(logicalDate.getMonth() + 1).padStart(2, '0');
  const dd = String(logicalDate.getDate()).padStart(2, '0');
  const logicalDateStr = `${yyyy}-${mm}-${dd}`;
  
  // Adjust clockMinutes system coordinate:
  // If we are before 6:45 AM, we treat it as 24h shift for task evaluation
  const evaluationMins = isBeforeShift ? timeInMins + 24 * 60 : timeInMins;
  
  return {
    rawDate: now,
    logicalDate: logicalDate,
    dayName: logicalDayName,
    dateStr: logicalDateStr,
    evaluationMins: evaluationMins,
    clockMinutes: timeInMins,
    seconds: seconds
  };
}

// Storage Operations

function getStorageKey(type, dateStr, itemId) {
  return `discipline_${type}_${dateStr}_${itemId}`;
}

function getWorkoutSetKey(dateStr, split, exerciseIndex, setIndex) {
  return `discipline_workout_${dateStr}_${split}_ex${exerciseIndex}_set${setIndex}`;
}

// Task Highlighting Engine

function evaluateActiveTask(timeState) {
  const schedule = SCHEDULES[timeState.dayName] || [];
  const currentMins = timeState.evaluationMins;
  
  let activeIndex = -1;
  let parsedSchedule = [];
  
  // Pre-calculate all minute intervals for matching
  for (let i = 0; i < schedule.length; i++) {
    const item = schedule[i];
    const startMins = timeToMinutes(item.start, item.startIsNextDay);
    const endMins = timeToMinutes(item.end, item.endIsNextDay);
    
    parsedSchedule.push({
      index: i,
      name: item.name,
      start: startMins,
      end: endMins,
      startStr: item.start,
      endStr: item.end,
      type: item.type
    });
    
    if (currentMins >= startMins && currentMins < endMins) {
      activeIndex = i;
    }
  }
  
  // Fallback in case we hit absolute boundaries
  if (activeIndex === -1 && parsedSchedule.length > 0) {
    if (currentMins < parsedSchedule[0].start) {
      activeIndex = parsedSchedule.length - 1; // Sleep cycle wrap around
    } else {
      activeIndex = parsedSchedule.length - 1;
    }
  }
  
  const activeTask = parsedSchedule[activeIndex];
  const nextTask = parsedSchedule[(activeIndex + 1) % parsedSchedule.length];
  
  return {
    parsedSchedule,
    activeIndex,
    activeTask,
    nextTask
  };
}

// Rendering Functions

/**
 * Renders the top level tabs navigation
 */
function initTabs() {
  dom.tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab");
      
      // Update UI active states
      dom.tabBtns.forEach(b => b.classList.remove("active"));
      dom.tabPanels.forEach(p => p.classList.remove("active"));
      
      btn.classList.add("active");
      const targetPanel = document.getElementById(tabName);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
      
      // Trigger side-effects based on loaded tab
      if (tabName === "schedule") {
        if (autoHighlight) {
          syncScheduleToCurrentTime();
        } else {
          renderScheduleTimeline(currentDayFilter);
        }
      } else if (tabName === "workouts") {
        renderWorkoutSplit(activeWorkoutSplit);
      } else if (tabName === "diet") {
        renderDietChecklist();
      }
    });
  });
}

/**
 * Populates day selectors in Schedule Tab
 */
function initWeekdaySelector() {
  dom.weekdaySelector.innerHTML = "";
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  days.forEach(day => {
    const split = WORKOUT_SPLIT_MAPPING[day];
    const button = document.createElement("button");
    button.className = "weekday-btn";
    button.setAttribute("data-day", day);
    button.innerHTML = `
      <span>${day.slice(0,3)}</span>
      <span class="split-label">${split.split(" ")[0]}</span>
    `;
    
    button.addEventListener("click", () => {
      autoHighlight = false;
      dom.autoHighlightToggle.classList.remove("active");
      selectScheduleDay(day);
    });
    
    dom.weekdaySelector.appendChild(button);
  });
  
  // Quick Dashboard Navigation triggers
  dom.workoutWidgetStatus.addEventListener("click", () => {
    const timeState = getLogicalTimeState();
    activeWorkoutSplit = WORKOUT_SPLIT_MAPPING[timeState.dayName];
    document.querySelector('[data-tab="workouts"]').click();
  });
  
  dom.dietWidgetStatus.addEventListener("click", () => {
    document.querySelector('[data-tab="diet"]').click();
  });
}

function selectScheduleDay(dayName) {
  currentDayFilter = dayName;
  
  // Highlight correct day pill
  const pills = dom.weekdaySelector.querySelectorAll(".weekday-btn");
  pills.forEach(p => {
    if (p.getAttribute("data-day") === dayName) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
  
  renderScheduleTimeline(dayName);
}

function syncScheduleToCurrentTime() {
  const timeState = getLogicalTimeState();
  selectScheduleDay(timeState.dayName);
}

/**
 * Render standard schedule list in the timeline tab
 */
function renderScheduleTimeline(dayName) {
  dom.timelineContainer.innerHTML = "";
  const schedule = SCHEDULES[dayName] || [];
  const timeState = getLogicalTimeState();
  const isCurrentDay = timeState.dayName === dayName;
  
  let activeIndex = -1;
  if (isCurrentDay) {
    const evaluation = evaluateActiveTask(timeState);
    activeIndex = evaluation.activeIndex;
  }
  
  schedule.forEach((item, idx) => {
    const isPast = isCurrentDay && idx < activeIndex;
    const isActive = isCurrentDay && idx === activeIndex;
    
    const div = document.createElement("div");
    div.className = `timeline-item type-${item.type} ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`;
    
    const startTimeStr = minutesToClockStr(timeToMinutes(item.start, item.startIsNextDay));
    const endTimeStr = minutesToClockStr(timeToMinutes(item.end, item.endIsNextDay));
    
    div.innerHTML = `
      <div class="timeline-time">${startTimeStr} - ${endTimeStr}</div>
      <div class="timeline-node"></div>
      <div class="timeline-details">
        <span class="timeline-name">${item.name}</span>
        <span class="timeline-badge">${item.type}</span>
      </div>
    `;
    
    dom.timelineContainer.appendChild(div);
    
    // Auto scroll active task into view
    if (isActive && autoHighlight) {
      setTimeout(() => {
        div.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  });
}

/**
 * Renders the Workout Routine checklists
 */
function renderWorkoutSplit(splitName) {
  dom.workoutSplitTitle.textContent = `${splitName} Routine`;
  dom.workoutSplitToggleBtn.textContent = `Show ${splitName === "Push" ? "Pull" : splitName === "Pull" ? "Legs" : "Push"}`;
  
  dom.exerciseList.innerHTML = "";
  const exercises = WORKOUT_SPLITS[splitName] || [];
  const timeState = getLogicalTimeState();
  
  if (splitName === "Rest day") {
    dom.exerciseList.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
        <h3>Active Rest Day</h3>
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Give your muscles time to repair and grow. Stick to healthy diet protocols!</p>
      </div>
    `;
    return;
  }
  
  exercises.forEach((ex, exIdx) => {
    const item = document.createElement("div");
    item.className = "exercise-item";
    
    let trackersHtml = "";
    for (let setNum = 1; setNum <= ex.sets; setNum++) {
      const storageKey = getWorkoutSetKey(timeState.dateStr, splitName, exIdx, setNum);
      const isCompleted = localStorage.getItem(storageKey) === "true";
      
      trackersHtml += `
        <button class="set-check ${isCompleted ? 'completed' : ''}" 
                data-ex-idx="${exIdx}" 
                data-set-num="${setNum}"
                title="Mark Set ${setNum} Completed">
          ${setNum}
        </button>
      `;
    }
    
    item.innerHTML = `
      <div class="exercise-info">
        <span class="exercise-name">${ex.name}</span>
        <span class="exercise-sets-desc">${ex.sets} sets &times; ${ex.reps} reps</span>
      </div>
      <div class="exercise-sets-tracker">
        ${trackersHtml}
      </div>
    `;
    
    // Wire set toggle event
    item.querySelectorAll(".set-check").forEach(btn => {
      btn.addEventListener("click", () => {
        const exIdx = btn.getAttribute("data-ex-idx");
        const setNum = btn.getAttribute("data-set-num");
        const storageKey = getWorkoutSetKey(timeState.dateStr, splitName, exIdx, setNum);
        
        const isCompleted = btn.classList.contains("completed");
        if (isCompleted) {
          btn.classList.remove("completed");
          localStorage.setItem(storageKey, "false");
        } else {
          btn.classList.add("completed");
          localStorage.setItem(storageKey, "true");
        }
        
        updateWorkoutWidgetProgress();
      });
    });
    
    dom.exerciseList.appendChild(item);
  });
}

/**
 * Renders daily cardio list (stays constant)
 */
function renderCardioList() {
  dom.cardioList.innerHTML = "";
  const timeState = getLogicalTimeState();
  const splitName = "Cardio";
  
  CARDIO_ROUTINE.forEach((ex, exIdx) => {
    const item = document.createElement("div");
    item.className = "exercise-item";
    
    let trackersHtml = "";
    for (let setNum = 1; setNum <= ex.sets; setNum++) {
      const storageKey = getWorkoutSetKey(timeState.dateStr, splitName, exIdx, setNum);
      const isCompleted = localStorage.getItem(storageKey) === "true";
      
      trackersHtml += `
        <button class="set-check ${isCompleted ? 'completed' : ''}" 
                data-ex-idx="${exIdx}" 
                data-set-num="${setNum}"
                title="Mark Set ${setNum} Completed"
                style="border-color: rgba(239, 68, 68, 0.25);">
          ${setNum}
        </button>
      `;
    }
    
    item.innerHTML = `
      <div class="exercise-info">
        <span class="exercise-name">${ex.name}</span>
        <span class="exercise-sets-desc">${ex.sets} sets &times; ${ex.reps}</span>
      </div>
      <div class="exercise-sets-tracker">
        ${trackersHtml}
      </div>
    `;
    
    item.querySelectorAll(".set-check").forEach(btn => {
      btn.addEventListener("click", () => {
        const exIdx = btn.getAttribute("data-ex-idx");
        const setNum = btn.getAttribute("data-set-num");
        const storageKey = getWorkoutSetKey(timeState.dateStr, splitName, exIdx, setNum);
        
        const isCompleted = btn.classList.contains("completed");
        if (isCompleted) {
          btn.classList.remove("completed");
          localStorage.setItem(storageKey, "false");
        } else {
          btn.classList.add("completed");
          localStorage.setItem(storageKey, "true");
        }
      });
    });
    
    dom.cardioList.appendChild(item);
  });
}

/**
 * Renders the Nutrition Tracker Checklist
 */
function renderDietChecklist() {
  dom.dietList.innerHTML = "";
  const timeState = getLogicalTimeState();
  
  DIET_INVENTORY.forEach((itemData) => {
    const storageKey = getStorageKey("diet", timeState.dateStr, itemData.id);
    const isCompleted = localStorage.getItem(storageKey) === "true";
    
    const div = document.createElement("div");
    div.className = `diet-item ${isCompleted ? 'checked' : ''}`;
    div.innerHTML = `
      <div class="diet-item-left">
        <div class="diet-checkbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="diet-item-info">
          <span class="diet-item-name">${itemData.name}</span>
          <span class="diet-item-quantity">${itemData.qty}</span>
        </div>
      </div>
      <span class="diet-item-protein">+${itemData.protein}g</span>
    `;
    
    div.addEventListener("click", () => {
      const currentlyChecked = div.classList.contains("checked");
      if (currentlyChecked) {
        div.classList.remove("checked");
        localStorage.setItem(storageKey, "false");
      } else {
        div.classList.add("checked");
        localStorage.setItem(storageKey, "true");
      }
      
      updateDietProgressRing();
    });
    
    dom.dietList.appendChild(div);
  });
  
  updateDietProgressRing();
}

// Progress Ring Updates

function updateDietProgressRing() {
  const timeState = getLogicalTimeState();
  let totalConsumed = 0;
  
  DIET_INVENTORY.forEach(item => {
    const key = getStorageKey("diet", timeState.dateStr, item.id);
    if (localStorage.getItem(key) === "true") {
      totalConsumed += item.protein;
    }
  });
  
  const percentage = Math.min(Math.round((totalConsumed / DIET_TARGET) * 100), 100);
  
  // Radial animation calculations
  const radius = 80;
  const circumference = 2 * Math.PI * radius; // ~502.65
  const offset = circumference - (percentage / 100) * circumference;
  
  dom.macroProgressRing.style.strokeDashoffset = offset;
  dom.macroProteinVal.textContent = totalConsumed;
  dom.macroStatsConsumed.textContent = `${totalConsumed}g`;
  dom.macroStatsPct.textContent = `${percentage}%`;
  
  // Focus widget update
  dom.dietWidgetProgress.textContent = `${totalConsumed}g / ${DIET_TARGET}g`;
  
  if (percentage >= 100) {
    dom.macroStatusText.textContent = "Optimal protein threshold achieved for today!";
    dom.dietWidgetStatus.textContent = "Optimized";
    dom.dietWidgetStatus.style.background = "rgba(16,185,129,0.2)";
    dom.dietWidgetStatus.style.color = "var(--color-gym)";
  } else {
    dom.macroStatusText.textContent = `Consume remaining ${DIET_TARGET - totalConsumed}g to hit recovery requirements.`;
    dom.dietWidgetStatus.textContent = "Track Fuel";
    dom.dietWidgetStatus.style.background = "rgba(255,255,255,0.05)";
    dom.dietWidgetStatus.style.color = "var(--text-secondary)";
  }
}

function updateWorkoutWidgetProgress() {
  const timeState = getLogicalTimeState();
  const split = WORKOUT_SPLIT_MAPPING[timeState.dayName];
  const exercises = WORKOUT_SPLITS[split] || [];
  
  let totalSets = 0;
  let completedSets = 0;
  
  exercises.forEach((ex, exIdx) => {
    totalSets += ex.sets;
    for (let s = 1; s <= ex.sets; s++) {
      const key = getWorkoutSetKey(timeState.dateStr, split, exIdx, s);
      if (localStorage.getItem(key) === "true") {
        completedSets++;
      }
    }
  });
  
  // Widget render
  dom.workoutSplitBadge.textContent = split;
  if (split === "Rest day") {
    dom.workoutWidgetProgress.textContent = "Rest Active";
    dom.workoutWidgetStatus.textContent = "Resting";
    dom.workoutWidgetStatus.style.background = "rgba(139,92,246,0.15)";
    dom.workoutWidgetStatus.style.color = "var(--color-rest)";
  } else {
    dom.workoutWidgetProgress.textContent = `${completedSets} / ${totalSets} Sets`;
    
    if (completedSets === totalSets && totalSets > 0) {
      dom.workoutWidgetStatus.textContent = "Completed";
      dom.workoutWidgetStatus.style.background = "rgba(16,185,129,0.2)";
      dom.workoutWidgetStatus.style.color = "var(--color-gym)";
    } else if (completedSets > 0) {
      dom.workoutWidgetStatus.textContent = "Active";
      dom.workoutWidgetStatus.style.background = "rgba(234,179,8,0.15)";
      dom.workoutWidgetStatus.style.color = "var(--color-college)";
    } else {
      dom.workoutWidgetStatus.textContent = "Start";
      dom.workoutWidgetStatus.style.background = "rgba(255,255,255,0.05)";
      dom.workoutWidgetStatus.style.color = "var(--text-secondary)";
    }
  }
}

// Live Time Tick & Timers Engine

function updateTimers() {
  const timeState = getLogicalTimeState();
  
  // 1. Live Clock display
  let hrs = timeState.rawDate.getHours();
  let mins = timeState.rawDate.getMinutes();
  let secs = timeState.rawDate.getSeconds();
  let ampm = hrs >= 12 ? "PM" : "AM";
  let clockHrs = hrs % 12;
  clockHrs = clockHrs === 0 ? 12 : clockHrs;
  let padMins = mins < 10 ? "0" + mins : mins;
  let padSecs = secs < 10 ? "0" + secs : secs;
  
  dom.clock.textContent = `${clockHrs}:${padMins}:${padSecs} ${ampm}`;
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dom.date.textContent = timeState.rawDate.toLocaleDateString('en-US', options);
  
  // 2. GATE Countdown Clock
  const gateDiff = GATE_TARGET_DATE.getTime() - timeState.rawDate.getTime();
  if (gateDiff <= 0) {
    dom.gateDays.textContent = "000";
    dom.gateHours.textContent = "00";
    dom.gateMins.textContent = "00";
    dom.gateSecs.textContent = "00";
  } else {
    const days = Math.floor(gateDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gateDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gateDiff % (1000 * 60)) / 1000);
    
    dom.gateDays.textContent = String(days).padStart(3, '0');
    dom.gateHours.textContent = String(hours).padStart(2, '0');
    dom.gateMins.textContent = String(minutes).padStart(2, '0');
    dom.gateSecs.textContent = String(seconds).padStart(2, '0');
  }
  
  // 3. Highlight calculations
  const evaluation = evaluateActiveTask(timeState);
  const { activeTask, nextTask } = evaluation;
  
  if (activeTask) {
    // Focus Mode Widget updating
    dom.focusTitle.textContent = activeTask.name;
    
    const startTimeStr = minutesToClockStr(activeTask.start);
    const endTimeStr = minutesToClockStr(activeTask.end);
    dom.focusTime.textContent = `${startTimeStr} - ${endTimeStr}`;
    
    // Progress calculation
    const totalDuration = activeTask.end - activeTask.start;
    const elapsed = timeState.evaluationMins - activeTask.start;
    const remaining = activeTask.end - timeState.evaluationMins;
    
    const percent = Math.min(Math.round((elapsed / totalDuration) * 100), 100);
    
    dom.focusProgressBar.style.width = `${percent}%`;
    dom.focusProgressBar.style.backgroundColor = `var(--color-${activeTask.type})`;
    dom.focusProgressPct.textContent = `${percent}%`;
    
    dom.focusTimeElapsed.textContent = `Elapsed: ${elapsed}m`;
    dom.focusTimeRemaining.textContent = `Remaining: ${remaining}m`;
    
    // Update theme-coded styling on focus card wrapper
    dom.focusCard.className = `glass-panel focus-card type-${activeTask.type}`;
    dom.focusGlow.style.background = `var(--color-${activeTask.type})`;
    
    dom.focusTypeLabel.textContent = activeTask.type;
    
    // Next Up Widget updating
    if (nextTask) {
      dom.nextTaskName.textContent = nextTask.name;
      dom.nextTaskTimeRange.textContent = `${minutesToClockStr(nextTask.start)} - ${minutesToClockStr(nextTask.end)}`;
      dom.nextTaskPill.style.backgroundColor = `var(--color-${nextTask.type})`;
    }
  }
  
  // 4. Synchronized Highlight checks for Schedule panel
  if (autoHighlight) {
    // Check if the current filter matches logical day. If not, auto-switch.
    if (currentDayFilter !== timeState.dayName) {
      syncScheduleToCurrentTime();
    } else {
      // Periodic check class updates
      const items = dom.timelineContainer.querySelectorAll(".timeline-item");
      if (items.length > 0 && evaluation.activeIndex !== -1) {
        items.forEach((item, idx) => {
          if (idx < evaluation.activeIndex) {
            item.className = item.className.replace("active", "").trim() + " past";
          } else if (idx === evaluation.activeIndex) {
            item.className = item.className.replace("past", "").trim() + " active";
          } else {
            item.className = item.className.replace("active", "").replace("past", "").trim();
          }
        });
      }
    }
  }
  
  // Widget totals updates
  updateWorkoutWidgetProgress();
  updateDietProgressRing();
}

// App Setup & Initializers

function setupSplitToggles() {
  const splits = ["Push", "Pull", "Legs", "Rest day"];
  dom.workoutSplitToggleBtn.addEventListener("click", () => {
    let nextIdx = (splits.indexOf(activeWorkoutSplit) + 1) % splits.length;
    activeWorkoutSplit = splits[nextIdx];
    renderWorkoutSplit(activeWorkoutSplit);
  });
}

function initAutoHighlightToggle() {
  dom.autoHighlightToggle.addEventListener("click", () => {
    autoHighlight = !autoHighlight;
    if (autoHighlight) {
      dom.autoHighlightToggle.classList.add("active");
      syncScheduleToCurrentTime();
    } else {
      dom.autoHighlightToggle.classList.remove("active");
    }
  });
}

function initializeApp() {
  const timeState = getLogicalTimeState();
  currentDayFilter = timeState.dayName;
  activeWorkoutSplit = WORKOUT_SPLIT_MAPPING[timeState.dayName];
  
  initTabs();
  initWeekdaySelector();
  initAutoHighlightToggle();
  setupSplitToggles();
  
  // Trigger initial renders
  syncScheduleToCurrentTime();
  renderWorkoutSplit(activeWorkoutSplit);
  renderCardioList();
  renderDietChecklist();
  
  // Start Time Tick Loop
  setInterval(updateTimers, 1000);
  updateTimers(); // Immediate execution
}

// Window Onload triggers
window.addEventListener("DOMContentLoaded", initializeApp);


// ==========================================
// TEST HELPER: Mocking System Clock for QA
// ==========================================
// To simulate a specific time for testing, call:
// mockSystemTime("Tuesday", "17:15") or mockSystemTime("Friday", "23:45")
// To reset to real time, call: resetSystemTime()
window.mockSystemTime = function(dayName, timeStr) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const targetDayIdx = days.indexOf(dayName);
  if (targetDayIdx === -1) {
    console.error("Invalid Day Name. Use e.g. 'Monday', 'Tuesday'...");
    return;
  }
  
  const [h, m] = timeStr.split(":").map(Number);
  const now = new Date();
  
  // Calculate relative day offsets to match dayName
  let currentDayIdx = now.getDay();
  let dayDiff = targetDayIdx - currentDayIdx;
  
  const mockDate = new Date(now);
  mockDate.setDate(mockDate.getDate() + dayDiff);
  mockDate.setHours(h, m, 0);
  
  systemTimeOverride = mockDate;
  console.log(`MOCK ACTIVE: Clock is locked to ${dayName} at ${timeStr}`);
  updateTimers();
  if (autoHighlight) {
    syncScheduleToCurrentTime();
  }
};

window.resetSystemTime = function() {
  systemTimeOverride = null;
  console.log("MOCK REMOVED: Clock restored to live system time.");
  updateTimers();
};
