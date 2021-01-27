import React from "react";
import Task from "./Task";
import Timer from "./assets/timer.ed46b6b4.png";
import Cells from "./assets/cells.9544a72f.png";
import FlightBooker from "./assets/bookflight.a5434663.png";
import Counter from "./assets/counter.9cd92091.png";
import Crud from "./assets/crud.515ce94b.png";
import Temperature from "./assets/tempconv.de9aff1f.png";
import CircleDrawer from "./assets/circledraw.235dfd8b.png";

const Tasks = ({ title, subtitle, content, children }) => {
  return (
    <>
      <Task
        title='Counter'
        img={Counter}
        compPath='counter'
        subtitle='Understanding the basic ideas of a language/toolkit.'
      >
        The task is to build a frame containing a label or read-only textfield{" "}
        <strong>T</strong> and a button <strong>B</strong>. Initially, the value
        in <strong>T</strong> is “0” and each click of <strong>B</strong>{" "}
        increases the value in <strong>T</strong> by one.
      </Task>
      <Task
        title='Temperature Converter'
        img={Temperature}
        compPath='temperature'
        subtitle='bidirectional data flow, user-provided text input.'
      >
        The task is to build a frame containing two textfields{" "}
        <strong>
          T<sub>C</sub>
        </strong>{" "}
        and{" "}
        <strong>
          T<sub>F</sub>
        </strong>{" "}
        representing the temperature in Celsius and Fahrenheit, respectively.
        Initially, both strongg
        <strong>
          T<sub>C</sub>
        </strong>{" "}
        and
        <strong>
          T<sub>F</sub>
        </strong>{" "}
        are empty. When the user enters a numerical value into{" "}
        <strong>
          T <sub>C</sub>
        </strong>{" "}
        the corresponding value in{" "}
        <strong>
          T<sub>F</sub>
        </strong>{" "}
        is automatically updated and vice versa. When the user enters a
        non-numerical string into{" "}
        <strong>
          T<sub>C</sub>
        </strong>{" "}
        the value in{" "}
        <strong>
          T<sub>F</sub>
        </strong>{" "}
        is not updated and vice versa. The formula for converting a temperature
        <strong>C</strong> in Celsius into a temperature <strong>F</strong> in
        Fahrenheit is <strong>C = (F - 32) * (5/9)</strong> and the dual
        direction is <strong>F = C * (9/5) + 32</strong>.
      </Task>
      <Task
        title='Flight Booker'
        compPath='flight-booker'
        img={FlightBooker}
        subtitle='Constraints.'
      >
        compPath=The task is to build a fra"" me containing a combobox{" "}
        <strong>C</strong> with the two options “one-way flight” and “return
        flight”, two textfields{" "}
        <strong>
          T<sub>1</sub>
        </strong>{" "}
        and <strong>T2</strong> representing the start and return date,
        respectively, and a button <strong>B</strong> for submitting the
        selected flight. <strong>T2</strong> is enabled iff <strong>C</strong>’s
        value is “return flight”. When <strong>C</strong> has the value “return
        flight” and <strong>T2</strong>’s date is strictly before{" "}
        <strong>
          T<sub>1</sub>
        </strong>
        ’s then <strong>B</strong> is disabled. When a non-disabled textfield{" "}
        <strong>T</strong> has an ill-formatted date then <strong>T</strong> is
        colored red and B is disabled. When clicking <strong>B</strong> a
        message is displayed informing the user of his selection (e.g. “You have
        booked a one-way flight on 04.04.2014.”). Initially, <strong>C</strong>{" "}
        has the value “one-way flight” and{" "}
        <strong>
          T<sub>1</sub>
        </strong>{" "}
        as well as <strong>T2</strong> have the same (arbitrary) date (it is
        implied that <strong>T2</strong> is disabled).
      </Task>
      <Task
        title='Timer'
        img={Timer}
        compPath='timer'
        subtitle='concurrency, competing user/signal interactions, responsiveness.'
      >
        The task is to build a frame containing a gauge <strong>G</strong> for
        the elapsed time
        <strong>e</strong>, a label which shows the elapsed time as a numerical
        value, a slider <strong>S</strong> by which the duration{" "}
        <strong>d</strong> of the timer can be adjusted while the timer is
        running and a reset button <strong>R</strong>. Adjusting{" "}
        <strong>S</strong> must immediately reflect on <strong>d</strong> and
        not only when <strong>S</strong> is released. It follows that while
        moving <strong>S</strong> the filled amount of <strong>G</strong> will
        (usually) change immediately. When <strong>e ≥ d</strong> is true then
        the timer stops (and <strong>G</strong> will be full). If, thereafter,{" "}
        <strong>d</strong> is increased such that <strong>d > e</strong> will be
        true then the timer restarts to tick until <strong>e ≥ d</strong> is
        true again. Clicking <strong>R</strong> will reset <strong>e</strong> to
        zero.
      </Task>
      <Task
        title='CRUD'
        img={Crud}
        compPath='crud'
        subtitle='separating the domain and presentation logic, managing mutation, building a non-trivial layout.'
      >
        The task is to build a frame containing the following elements: a
        textfield{" "}
        <strong>
          T <sub>prefix</sub>
        </strong>{" "}
        , a pair of textfields{" "}
        <strong>
          T <sub>name</sub>
        </strong>{" "}
        and{" "}
        <strong>
          T <sub>surname</sub>
        </strong>
        , a listbox <strong>L</strong>, buttons <strong>BC</strong>,{" "}
        <strong>BU</strong> and <strong>BD</strong> and the three labels as seen
        in the screenshot. <strong>L</strong> presents a view of the data in the
        database that consists of a list of names. At most one entry can be
        selected in <strong>L</strong> at a time. By entering a string into{" "}
        <strong>
          T <sub>prefix</sub>
        </strong>{" "}
        the user can filter the names whose surname start with the entered
        prefix—this should happen immediately without having to submit the
        prefix with enter. Clicking <strong>BC</strong> will append the
        resulting name from concatenating the strings in{" "}
        <strong>
          T <sub>name</sub>
        </strong>{" "}
        and{" "}
        <strong>
          T <sub>surname</sub>
        </strong>{" "}
        to <strong>L</strong>. <strong>BU</strong> and <strong>BD</strong> are
        enabled iff an entry in <strong>L</strong> is selected. In contrast to{" "}
        <strong>BC</strong>, <strong>BU</strong> will not append the resulting
        name but instead replace the selected entry with the new name.{" "}
        <strong>BD</strong> will remove the selected entry. The layout is to be
        done like suggested in the screenshot. In particular, <strong>L</strong>{" "}
        must occupy all the remaining space.
      </Task>
      <Task
        title='Circle Drawer'
        img={CircleDrawer}
        compPath='circle-drawer'
        subtitle='undo/redo, custom drawing, dialog control.'
      >
        The task is to build a frame containing an undo and redo button as well
        as a canvas area underneath. Left-clicking inside an empty area inside
        the canvas will create an unfilled circle with a fixed diameter whose
        center is the left-clicked point. The circle nearest to the mouse
        pointer such that the distance from its center to the pointer is less
        than its radius, if it exists, is filled with the color gray. The gray
        circle is the selected circle <strong>C</strong>. Right-clicking{" "}
        <strong>C</strong> will make a popup menu appear with one entry “Adjust
        diameter..”. Clicking on this entry will open another frame with a
        slider inside that adjusts the diameter of <strong>C</strong>. Changes
        are applied immediately. Closing this frame will mark the last diameter
        as significant for the undo/redo history. Clicking undo will undo the
        last significant change (i.e. circle creation or diameter adjustment).
        Clicking redo will reapply the last undoed change unless new changes
        were made by the user in the meantime.
      </Task>
      <Task
        title='Cells'
        img={Cells}
        compPath='cells'
        subtitle='change propagation, widget customization, implementing a more authentic/involved GUI application.'
      >
        The task is to create a simple but usable spreadsheet application. The
        spreadsheet should be scrollable. The rows should be numbered from 0 to
        99 and the columns from A to Z. Double-clicking a cell{" "}
        <strong>C</strong> lets the user change <strong>C</strong>’s formula.
        After having finished editing the formula is parsed and evaluated and
        its updated value is shown in <strong>C</strong>. In addition, all cells
        which depend on <strong>C</strong> must be reevaluated. This process
        repeats until there are no more changes in the values of any cell
        (change propagation). Note that one should not just recompute the value
        of every cell but only of those cells that depend on another cell’s
        changed value. If there is an already provided spreadsheet widget it
        should not be used. Instead, another similar widget (like JTable in
        Swing) should be customized to become a reusable spreadsheet widget.
      </Task>
    </>
  );
};

export default Tasks;
